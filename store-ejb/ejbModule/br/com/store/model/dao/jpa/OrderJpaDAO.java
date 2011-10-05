package br.com.store.model.dao.jpa;

import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import br.com.store.model.dao.OrderDAO;
import br.com.store.model.entity.Customer;
import br.com.store.model.entity.Order;

/**
 * JPA implementation of {@link OrderDAO} interface. Could be any
 * implementation, like Hibernate, iBatis, JDBC, etc.
 * 
 * @author Rafael Carneiro [rafaelcarneirob@gmail.com]
 * @author Tarso Bessa [tarso.bessa@gmail.com]
 * 
 */
@Stateless
public class OrderJpaDAO implements OrderDAO {

	/*
	 * DI of EntityManager
	 */
	@PersistenceContext(unitName = "store")
	private EntityManager entityManager;

	/*
	 * (non-Javadoc)
	 * 
	 * @see br.com.store.model.dao.OrderDAO#findAll()
	 */
	@Override
	@SuppressWarnings("unchecked")
	public List<Order> findAll() {
		return (List<Order>) entityManager.find(Order.class, new Order());
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * br.com.store.model.dao.OrderDAO#save(br.com.store.model.entity.Order)
	 */
	@Override
	public Order save(Order order) {

		Customer customerFromView = order.getCustomer();

		Customer customer = this.getCustomer(customerFromView);

		order.setCustomer(customer);

		entityManager.persist(order);

		return order;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * br.com.store.model.dao.OrderDAO#update(br.com.store.model.entity.Order)
	 */
	@Override
	public Order update(Order order) {

		entityManager.merge(order);

		return order;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * br.com.store.model.dao.OrderDAO#findLastOrderByCustomer(br.com.store.
	 * model.entity.Customer)
	 */
	@Override
	public Order findLastOrderByCustomer(Customer customer) {
		List<Order> orders = findAllOrdersByCustomer(customer);
		if (orders != null && !orders.isEmpty()) {
			return orders.get(0);
		}
		return null;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * br.com.store.model.dao.OrderDAO#findAllOrdersByCustomer(br.com.store.
	 * model.entity.Customer)
	 */
	@SuppressWarnings("unchecked")
	@Override
	public List<Order> findAllOrdersByCustomer(Customer customer) {

		Customer customerData = (Customer) this.getCustomer(customer);

		List<Order> lstOrders = entityManager.createQuery(
				"FROM " + Order.class.getName()
						+ " o WHERE o.customer =:customer ORDER BY o.id DESC")
				.setParameter("customer", customerData).getResultList();

		return lstOrders;
	}

	/**
	 * This method return an Customer from data base.
	 * 
	 * @param customer
	 *            - Entity Customer
	 * @return an customer from data base
	 */
	private Customer getCustomer(Customer customer) {

		Query query = this.entityManager.createQuery("FROM "
				+ Customer.class.getName() + " c WHERE c.name =:nameCustomer");

		query.setParameter("nameCustomer", customer.getName());

		return (Customer) query.getSingleResult();
	}

}
