package br.com.store.view.managedbeans;

import java.security.Principal;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.faces.context.FacesContext;

import org.apache.myfaces.trinidad.context.RequestContext;

import br.com.store.model.entity.Customer;
import br.com.store.model.entity.Order;
import br.com.store.model.service.OrderService;
import br.com.store.view.utils.ServiceLocator;

/**
 * Managed Bean class for orders
 * 
 * @author Tarso Bessa [tarso.bessa@gmail.com]
 * @author Rafael Carneiro [rafaelcarneirob@gmail.com]
 * 
 */
public class OrdersBean {
	/**
	 * The order service
	 */
	private OrderService orderService = (OrderService) ServiceLocator
			.getService("store/OrderServiceBean/remote");

	public OrdersBean() {
	}

	@PostConstruct
	public void init() {

		Principal simplePrincipal = FacesContext.getCurrentInstance()
				.getExternalContext().getUserPrincipal();

		if (simplePrincipal != null) {

			Customer customer = new Customer();
			customer.setName(simplePrincipal.getName());

			RequestContext.getCurrentInstance().getPageFlowScope().put(
					"lastOrder", orderService.getLastByCustomer(customer));
			RequestContext.getCurrentInstance().getPageFlowScope().put(
					"allOrders", orderService.getAllOrdersByCustomer(customer));
		}
	}

	/**
	 * Returns the last order made by the customer.
	 * 
	 * @return
	 */
	public Order getLastOrder() {
		return (Order) RequestContext.getCurrentInstance().getPageFlowScope()
				.get("lastOrder");
	}

	/**
	 * Returns all the orders from the logged customer
	 * 
	 * @return
	 */
	@SuppressWarnings("unchecked")
	public List<Order> getAllOrders() {
		return (List<Order>) RequestContext.getCurrentInstance()
				.getPageFlowScope().get("allOrders");
	}

	public OrderService getOrderService() {
		return orderService;
	}

	public void setOrderService(OrderService orderService) {
		this.orderService = orderService;
	}

}
