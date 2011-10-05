package br.com.store.model.service.impl;

import java.util.List;

import javax.annotation.Resource;
import javax.annotation.security.RolesAllowed;
import javax.ejb.EJB;
import javax.ejb.Stateless;
import javax.interceptor.Interceptors;
import javax.jms.Connection;
import javax.jms.ConnectionFactory;
import javax.jms.JMSException;
import javax.jms.MessageProducer;
import javax.jms.ObjectMessage;
import javax.jms.Queue;
import javax.jms.Session;

import br.com.store.model.dao.OrderDAO;
import br.com.store.model.entity.Customer;
import br.com.store.model.entity.Order;
import br.com.store.model.entity.Payment;
import br.com.store.model.interceptors.OrderHistoryInterceptor;
import br.com.store.model.service.OrderService;

/**
 * Implementation of {@link OrderService}. This class is protected with JAAS.
 * 
 * @author Rafael Carneiro [rafaelcarneirob@gmail.com]
 * @author Tarso Bessa [tarso.bessa@gmail.com]
 */

@Stateless
public class OrderServiceBean implements OrderService {

	/*
	 * DI for OrderDAO
	 */
	@EJB
	private OrderDAO orderDAO;

	/*
	 * Obtain the resource from container. This resource is necessary for JMS.
	 */
	@Resource(mappedName = "java:/JmsXA")
	private ConnectionFactory connectionFactory;

	/*
	 * Obtain the resource from container. This resource is necessary for JMS.
	 */
	@Resource(mappedName = "queue/testQueue")
	private Queue queue;

	/*
	 * This method is protected by role "cliente (or client in english)". Your
	 * responsibility is save Order entity in data base and send the same object
	 * to JMS.
	 * 
	 * 
	 * (non-Javadoc)
	 * 
	 * @see
	 * br.com.store.model.service.OrderService#checkout(br.com.store.model.entity
	 * .Order)
	 */
	@Override
	@RolesAllowed("cliente")
	@Interceptors(OrderHistoryInterceptor.class)
	public Order checkout(Order order) throws JMSException {

		order.getPayment().setStatus(Payment.ST_SUBMITTED);

		Order orderSaved = orderDAO.save(order);

		/*
		 * Creating a message producer for JMS.
		 */
		Connection connection = connectionFactory.createConnection();

		Session session = connection.createSession(true,
				Session.SESSION_TRANSACTED);

		MessageProducer producer = session.createProducer(queue);

		ObjectMessage message = session.createObjectMessage();

		message.setObject(orderSaved);

		producer.send(message);

		connection.close();

		return orderSaved;
	}

	/*
	 * This method contains the annotation @PermitAll and ins´t protected.
	 * 
	 * (non-Javadoc)
	 * 
	 * @see br.com.store.model.service.OrderService#getAll()
	 */
	@Override
	public List<Order> getAll() {
		return this.orderDAO.findAll();
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see br.com.store.model.service.OrderService#getLastByCustomer(Customer)
	 */
	@Override
	public Order getLastByCustomer(Customer customer) {
		return orderDAO.findLastOrderByCustomer(customer);
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * br.com.store.model.service.OrderService#getAllOrdersByCustomer(Customer)
	 */
	@Override
	public List<Order> getAllOrdersByCustomer(Customer customer) {
		return orderDAO.findAllOrdersByCustomer(customer);
	}

}
