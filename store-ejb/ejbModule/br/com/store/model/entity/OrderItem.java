package br.com.store.model.entity;

import java.io.Serializable;
import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

/**
 * Class who represents a OrderItem.
 * 
 * @author Rafael Carneiro [rafaelcarneirob@gmail.com]
 * @author Tarso Bessa [tarso.bessa@gmail.com]
 */
@Entity
@Table(name = "TB_ORDER_ITEM")
public class OrderItem implements Serializable {

	/**
	 * Serial number
	 */
	private static final long serialVersionUID = 8295158529457682515L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "CD_ORI")
	private Integer id;

	/**
	 * Product
	 */
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "CD_PROD")
	private Product product;

	/**
	 * Quantity
	 */
	@Column(name = "NUM_QTD")
	private Integer quantity;

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}

	public Integer getQuantity() {
		return quantity;
	}

	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	/**
	 * Returns the item value. The quantity multiplied by the product price.
	 * 
	 * @return
	 */
	public BigDecimal getItemValue() {
		BigDecimal value = new BigDecimal(0);
		if (quantity == null || product == null || product.getPrice() == null) {
			return value;
		} else {
			value = value.add(new BigDecimal(quantity).multiply(product
					.getPrice()));
		}
		return value;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((product == null) ? 0 : product.hashCode());
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
		final OrderItem other = (OrderItem) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		if (product == null) {
			if (other.product != null)
				return false;
		} else if (!product.equals(other.product))
			return false;
		return true;
	}
}
