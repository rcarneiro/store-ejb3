package br.com.store.model.service.impl;

import javax.ejb.EJB;
import javax.ejb.Stateless;

import br.com.store.model.dao.OrderHistoryDAO;
import br.com.store.model.entity.OrderHistory;
import br.com.store.model.service.OrderHistoryService;

/**
 * Implementation of {@link OrderHistoryService}
 * 
 * @author Rafael Carneiro [rafaelcarneirob@gmail.com]
 * @author Tarso Bessa [tarso.bessa@gmail.com]
 */
@Stateless
public class OrderHistoryServiceBean implements OrderHistoryService {

	/*
	 * DI for EntityManager
	 */
	@EJB
	private OrderHistoryDAO orderHistoryDAO;

	/*
	 * (non-Javadoc)
	 * 
	 * @see br.com.store.model.service.impl.OrderHistoryService#insertOrderHistory(br.com.store.model.entity.OrderHistory)
	 */
	public OrderHistory insertOrderHistory(OrderHistory orderHistory) {

		orderHistoryDAO.save(orderHistory);

		return orderHistory;
	}

}
