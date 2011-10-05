package br.com.store.view.managedbeans;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.faces.application.FacesMessage;
import javax.faces.component.UIComponent;
import javax.faces.context.FacesContext;
import javax.faces.event.ActionEvent;
import javax.faces.event.ValueChangeEvent;
import javax.jms.JMSException;

import org.apache.myfaces.trinidad.component.UIXTable;
import org.apache.myfaces.trinidad.context.RequestContext;

import br.com.store.model.entity.Customer;
import br.com.store.model.entity.Order;
import br.com.store.model.entity.OrderItem;
import br.com.store.model.entity.Payment;
import br.com.store.model.entity.Product;
import br.com.store.model.service.OrderService;
import br.com.store.model.service.ProductService;
import br.com.store.view.utils.ServiceLocator;

/**
 * A managed bean responsible to process the cart operations.
 * 
 * @author Tarso Bessa [tarso.bessa@gmail.com]
 * @author Rafael Carneiro [rafaelcarneirob@gmail.com]
 */
public class CartBean {

	/**
	 * The order service to process the customers orders
	 */

	private OrderService orderService = (OrderService) ServiceLocator
			.getService("store/OrderServiceBean/remote");
	/**
	 * The product service used to provide the product list
	 */

	private ProductService productService = (ProductService) ServiceLocator
			.getService("store/ProductServiceBean/remote");

	/**
	 * The table to display the order items
	 */
	private UIXTable tblOrderItems;
	/**
	 * The panel for the cart
	 */
	private UIComponent pnlCart;
	/**
	 * The product selected on the interface to be added in the cart
	 */
	private Product choosenProduct;

	public CartBean() {
		// if the order is null, creates a an empty one
		if (getOrder() == null) {
			newOrder();
		}
	}

	/**
	 * Creates a new Order.
	 */
	protected void newOrder() {
		setOrder(new Order());
		// Initialize the required objects
		getOrder().setPayment(new Payment());
	}

	/**
	 * Returns the order item from the current row of the cart table.
	 * 
	 * @return
	 */
	protected OrderItem getActualOrderItem() {
		return (OrderItem) tblOrderItems.getRowData();
	}

	/**
	 * Adds a product in the current Order.
	 * 
	 * @param event
	 */
	public void addProduct(ActionEvent event) {
		Order order = getOrder();

		// initialize the items
		if (order.getItems() == null) {
			order.setItems(new HashSet<OrderItem>());
			// The first product
			OrderItem item = new OrderItem();
			item.setProduct(getChoosenProduct());
			item.setQuantity(1);
			order.getItems().add(item);
		} else {
			OrderItem itemInside = findItem(order.getItems(),
					getChoosenProduct());
			if (itemInside != null) {
				itemInside.setQuantity(itemInside.getQuantity() + 1);
			} else {
				OrderItem item = new OrderItem();
				item.setProduct(getChoosenProduct());
				item.setQuantity(1);
				order.getItems().add(item);
			}
		}
		RequestContext.getCurrentInstance().addPartialTarget(pnlCart);
	}

	/**
	 * Removes the current item in the cart table model.
	 * 
	 * @param event
	 */
	public void removeItem(ActionEvent event) {
		getOrder().getItems().remove(getActualOrderItem());
		RequestContext.getCurrentInstance().addPartialTarget(pnlCart);
	}

	/**
	 * Returns the order item associated with the product passed as an argument.
	 * 
	 * @return
	 */
	protected OrderItem findItem(Set<OrderItem> items, Product product) {
		for (OrderItem item : items) {
			if (item.getProduct().equals(product)) {
				return item;
			}
		}
		return null;
	}

	/**
	 * Returns a list with all available products.
	 * 
	 * @return
	 */
	public List<Product> getProductsList() {
		return productService.getAll();
	}

	/**
	 * Notify the items table to re-render itself.
	 * 
	 * @param event
	 */
	public void updateQuantity(ValueChangeEvent event) {
		// if the new value is null, delete the item
		if (new Integer(0).compareTo((Integer) event.getNewValue()) >= 0) {
			removeItem(null);
		}
		/*
		 * Updates the items table
		 */
		RequestContext.getCurrentInstance()
				.addPartialTarget(getTblOrderItems());
	}

	/**
	 * Send the Order object to OrderService to finish the process.
	 */
	public String checkout() {

		Order order = this.getOrder();

		Customer customer = new Customer();

		String nameCustomer = FacesContext.getCurrentInstance()
				.getExternalContext().getUserPrincipal().getName();

		customer.setName(nameCustomer);

		order.setCustomer(customer);

		try {
			this.setOrder(orderService.checkout(order));
		} catch (JMSException e) {
			FacesContext.getCurrentInstance().addMessage(null,
					new FacesMessage(e.getMessage()));

		}

		this.newOrder();

		return "orders";

	}

	/**
	 * Schedule a date for execute and update the quantities products
	 * 
	 * @param event
	 */
	public void scheduleStock(ActionEvent event) {

		// update stock

	}

	/**
	 * Return the Order
	 * 
	 * @return
	 */
	public Order getOrder() {
		return (Order) FacesContext.getCurrentInstance().getExternalContext()
				.getSessionMap().get(Order.class.getSimpleName());
	}

	/**
	 * Sets a new Order object.
	 * 
	 * @param order
	 */
	public void setOrder(Order order) {
		FacesContext.getCurrentInstance().getExternalContext().getSessionMap()
				.put(Order.class.getSimpleName(), order);

	}

	/*
	 * Methods getters and setters
	 */

	public UIXTable getTblOrderItems() {
		return tblOrderItems;
	}

	public void setTblOrderItems(UIXTable tblOrderItems) {
		this.tblOrderItems = tblOrderItems;
	}

	public Product getChoosenProduct() {
		return choosenProduct;
	}

	public void setChoosenProduct(Product choosenProduct) {
		this.choosenProduct = choosenProduct;
	}

	public OrderService getOrderService() {
		return orderService;
	}

	public void setOrderService(OrderService orderService) {
		this.orderService = orderService;
	}

	public ProductService getProductService() {
		return productService;
	}

	public void setProductService(ProductService productService) {
		this.productService = productService;
	}

	public UIComponent getPnlCart() {
		return pnlCart;
	}

	public void setPnlCart(UIComponent pnlCart) {
		this.pnlCart = pnlCart;
	}

}
