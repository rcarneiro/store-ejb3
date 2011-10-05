package br.com.store.model.entity;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

/**
 * Class who represents a Order.
 * 
 * @author Rafael Carneiro [rafaelcarneirob@gmail.com]
 * @author Tarso Bessa [tarso.bessa@gmail.com]
 */
@Entity
@Table(name = "TB_ORDER")
public class Order implements Serializable {

	/**
	 * Serial number
	 */
	private static final long serialVersionUID = -2563901917730874899L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "CD_ORD")
	private Integer id;

	/**
	 * The items associated with the order.
	 */
	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@Column(name = "CD_ORD")
	private Set<OrderItem> items;

	/**
	 * The customer who made the order.
	 */
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "CD_CUST")
	private Customer customer;

	/**
	 * The payment information about the order.
	 */
	@ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	@JoinColumn(name = "CD_PMT")
	private Payment payment;

	/**
	 * The history of the order events.
	 */
	@OneToMany(cascade = CascadeType.ALL)
	@Column(name = "CD_HIS")
	private Set<OrderHistory> history;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	/**
	 * Returns the value of the order (sum of the product prices).
	 * 
	 * @return
	 */
	public BigDecimal getOrderValue() {
		BigDecimal value = new BigDecimal(0);
		if (getItems() != null) {
			for (OrderItem item : getItems()) {
				value = value.add(item.getItemValue());
			}
		}
		return value;
	}

	/**
	 * Returns a list with the items in the Set.
	 * 
	 * @return
	 */
	public List<OrderItem> getItemsList() {
		Set<OrderItem> itemsSet = getItems();
		if (itemsSet == null) {
			itemsSet = new HashSet<OrderItem>();
		}
		return new ArrayList<OrderItem>(itemsSet);
	}

	/**
	 * Returns true if this order has no items.
	 * 
	 * @return
	 */
	public boolean isEmpty() {
		return getItems() == null || getItems().isEmpty();
	}

	public Payment getPayment() {
		return payment;
	}

	public void setPayment(Payment payment) {
		this.payment = payment;
	}

	public Set<OrderItem> getItems() {
		return items;
	}

	public void setItems(Set<OrderItem> items) {
		this.items = items;
	}

	public Set<OrderHistory> getHistory() {
		return history;
	}

	public void setHistory(Set<OrderHistory> history) {
		this.history = history;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		final Order other = (Order) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}

}
