package br.com.store.model.interceptors;

import java.util.Date;

import javax.ejb.EJB;
import javax.interceptor.AroundInvoke;
import javax.interceptor.InvocationContext;

import br.com.store.model.entity.Order;
import br.com.store.model.entity.OrderHistory;
import br.com.store.model.service.OrderHistoryService;

/**
 * Class that represents a interceptor.
 * 
 * @author Rafael Carneiro [rafaelcarneirob@gmail.com]
 * 
 */
public class OrderHistoryInterceptor {

	/*
	 * DI for OrderHistoryService
	 */
	@EJB
	private OrderHistoryService orderHistoryService;

	/**
	 * All aspect logic stay here.
	 * 
	 * @param invocationContext
	 * @return
	 * @throws Exception
	 */
	@AroundInvoke
	public Object orderHistory(InvocationContext invocationContext)
			throws Exception {

		System.out.println("------------> Intercepting method");

		Object proceed = invocationContext.proceed();

		Object[] parameters = invocationContext.getParameters();

		Order order = null;
		for (Object object : parameters) {
			if (object instanceof Order) {
				order = (Order) object;
			}
		}

		OrderHistory orderHistory = new OrderHistory();

		orderHistory.setDate((order == null) ? new Date() : order.getPayment()
				.getCardDate());

		orderHistory.setOperation("insert");

		if (order != null) {
			orderHistory.setUsername(order.getCustomer().getName());
		}

		this.orderHistoryService.insertOrderHistory(orderHistory);

		return proceed;
	}
}
