package br.com.store.model.service;

import java.util.List;

import javax.ejb.Remote;
import javax.jms.JMSException;

import br.com.store.model.entity.Customer;
import br.com.store.model.entity.Order;

/**
 * Interface that represents the business contract of order.
 * 
 * @author Rafael Carneiro [rafaelcarneirob@gmail.com]
 * @author Tarso Bessa [tarso.bessa@gmail.com]
 */

@Remote
public interface OrderService {

	/**
	 * Process the order.
	 * 
	 * Validates the required information: A customer and the payment are
	 * required.
	 * 
	 * Send the payment to be processed by a MessageDriven.
	 * 
	 * This method is protected by JAAS.
	 * 
	 * @param order
	 */

	public Order checkout(Order order) throws JMSException;

	/**
	 * Returns all orders.
	 * 
	 * @return
	 */
	public List<Order> getAll();

	/**
	 * Returns the last order made by the customer.
	 * 
	 * @param customer
	 * @return
	 */
	public Order getLastByCustomer(Customer customer);

	/**
	 * Returns all the orders from the customer.
	 * 
	 * @param customer
	 * @return
	 */
	public List<Order> getAllOrdersByCustomer(Customer customer);

}
