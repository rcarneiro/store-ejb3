package br.com.store.model.entity;

import java.io.Serializable;
import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Class who represents a Product.
 * 
 * @author Rafael Carneiro [rafaelcarneirob@gmail.com]
 * @author Tarso Bessa [tarso.bessa@gmail.com]
 */
@Entity
@Table(name = "TB_PROD")
public class Product implements Serializable {

	/**
	 * Serial number
	 */
	private static final long serialVersionUID = -4459765898677671841L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "CD_PROD")
	private Integer id;

	/**
	 * Name.
	 */
	@Column(name = "NM_PROD")
	private String name;

	/**
	 * Price.
	 */
	@Column(name = "VR_PROD")
	private BigDecimal price;

	/**
	 * Quantity
	 */
	@Column(name = "QTDE_PROD")
	private Integer qtde;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public BigDecimal getPrice() {
		return price;
	}

	public void setPrice(BigDecimal price) {
		this.price = price;
	}

	public Integer getQtde() {
		return qtde;
	}

	public void setQtde(Integer qtde) {
		this.qtde = qtde;
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
		final Product other = (Product) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}

}
