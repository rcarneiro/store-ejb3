package br.com.store.model.dao.jpa;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import br.com.store.model.dao.OrderHistoryDAO;
import br.com.store.model.entity.OrderHistory;

/**
 * JPA implementation of {@link OrderHistoryDAO} interface. Could be any
 * implementation, like Hibernate, iBatis, JDBC, etc.
 * 
 * @author Rafael Carneiro [rafaelcarneirob@gmail.com]
 * @author Tarso Bessa [tarso.bessa@gmail.com]
 */

@Stateless
public class OrderHistoryJpaDAO implements OrderHistoryDAO {

	/*
	 * DI of EntityManager
	 */
	@PersistenceContext(unitName = "store")
	private EntityManager entityManager;

	/*
	 * (non-Javadoc)
	 * 
	 * @see br.com.store.model.dao.OrderHistoryDAO#save(br.com.store.model.entity.OrderHistory)
	 */
	@Override
	public OrderHistory save(OrderHistory orderHistory) {

		entityManager.persist(orderHistory);

		return orderHistory;
	}

}
