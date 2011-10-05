package br.com.store.model.dao.jpa;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import br.com.store.model.dao.PaymentDAO;
import br.com.store.model.entity.Payment;

/**
 * JPA implementation of {@link PaymentDAO} interface. Could be any
 * implementation, like Hibernate, iBatis, JDBC, etc.
 * 
 * @author Rafael Carneiro [rafaelcarneirob@gmail.com]
 * @author Tarso Bessa [tarso.bessa@gmail.com]
 */
@Stateless
public class PaymentJpaDAO implements PaymentDAO {

	/*
	 * DI of EntityManager
	 */
	@PersistenceContext(unitName = "store")
	private EntityManager entityManager;

	/*
	 * (non-Javadoc)
	 * 
	 * @see br.com.store.model.dao.PaymentDAO#save(br.com.store.model.entity.Payment)
	 */
	@Override
	public Payment save(Payment payment) {

		entityManager.persist(payment);

		return payment;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see br.com.store.model.dao.PaymentDAO#update(br.com.store.model.entity.Payment)
	 */
	@Override
	public Payment update(Payment payment) {

		entityManager.merge(payment);

		return payment;
	}

}
