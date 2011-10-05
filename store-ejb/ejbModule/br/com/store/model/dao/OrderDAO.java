package br.com.store.model.dao;

import java.util.List;

import javax.ejb.Local;

import br.com.store.model.entity.Customer;
import br.com.store.model.entity.Order;

/**
 * Interface that represents the contract of data logic for {@link Order}.
 * 
 * Remember: this interface don´t need to be an EJB.
 * 
 * @author Rafael Carneiro [rafaelcarneirob@gmail.com]
 * @author Tarso Bessa [tarso.bessa@gmail.com]
 */

@Local
public interface OrderDAO {

	/**
	 * Save the entity
	 * 
	 * @param order
	 *            - Entity Order
	 * @return
	 */
	public Order save(Order order);

	/**
	 * Update the entity
	 * 
	 * @param order
	 * @return
	 */
	public Order update(Order order);

	/**
	 * Return all data in the data base
	 * 
	 * @return
	 */
	public List<Order> findAll();

	/**
	 * Return the last orders by customer.
	 * 
	 * @param customer
	 * @return
	 */
	public Order findLastOrderByCustomer(Customer customer);

	/**
	 * Return all data in the data base of the Customer.
	 * 
	 * @param customer
	 * @return
	 */
	public List<Order> findAllOrdersByCustomer(Customer customer);

}
