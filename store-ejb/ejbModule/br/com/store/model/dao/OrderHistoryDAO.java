package br.com.store.model.dao;

import javax.ejb.Local;

import br.com.store.model.entity.OrderHistory;

/**
 * Interface that represents the contract of data logic for {@link OrderHistory}.
 * 
 * Remember: this interface don´t need to be an EJB.
 */
@Local
public interface OrderHistoryDAO {

	/**
	 * Save the entity
	 * 
	 * @param orderHistory
	 * @return
	 */
	public OrderHistory save(OrderHistory orderHistory);

}
