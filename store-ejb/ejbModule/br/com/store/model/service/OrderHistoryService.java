package br.com.store.model.service;

import javax.ejb.Local;

import br.com.store.model.entity.OrderHistory;

/**
 * Interface that represents the business contract of order history.
 * 
 * @author Rafael Carneiro [rafaelcarneirob@gmail.com]
 * @author Tarso Bessa [tarso.bessa@gmail.com]
 */

@Local
public interface OrderHistoryService {

	/**
	 * This method contains a business logic to insert a Order History.
	 * 
	 * @param orderHistory
	 * @return
	 */
	public OrderHistory insertOrderHistory(OrderHistory orderHistory);

}