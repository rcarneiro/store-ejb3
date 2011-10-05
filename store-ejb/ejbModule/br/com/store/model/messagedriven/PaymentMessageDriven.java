package br.com.store.model.messagedriven;

import javax.ejb.ActivationConfigProperty;
import javax.ejb.MessageDriven;
import javax.jms.JMSException;
import javax.jms.Message;
import javax.jms.MessageListener;
import javax.jms.ObjectMessage;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import br.com.store.model.entity.Order;
import br.com.store.model.entity.Payment;

/**
 * Class that represents a Message Driven Bean.
 * 
 * @author Rafael Carneiro [rafaelcarneirob@gmail.com]
 * 
 */
@MessageDriven(activationConfig = {
		@ActivationConfigProperty(propertyName = "destinationType", propertyValue = "javax.jms.Queue"),
		@ActivationConfigProperty(propertyName = "destination", propertyValue = "queue/testQueue") })
public class PaymentMessageDriven implements MessageListener {

	/*
	 * DI for EntityManager
	 */
	@PersistenceContext(unitName = "store")
	private EntityManager entityManager;

	/*
	 * This method contains the business logic to be processed for MDB.
	 * 
	 * (non-Javadoc)
	 * 
	 * @see javax.jms.MessageListener#onMessage(javax.jms.Message)
	 */
	@Override
	public void onMessage(Message message) {

		ObjectMessage objectMessage = (ObjectMessage) message;

		try {
			Order order = (Order) objectMessage.getObject();

			boolean success = ((int) (Math.random() * 10)) % 2 == 0;

			if (success) {
				order.getPayment().setStatus(Payment.ST_PROCESSED);
			} else {
				order.getPayment().setStatus(Payment.ST_REFUSED);
			}

			this.entityManager.merge(order.getPayment());

		} catch (JMSException e) {
			e.printStackTrace();
		}

	}

}
