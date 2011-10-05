package br.com.store.model.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Class who represents a Customer.
 * 
 * @author Rafael Carneiro [rafaelcarneirob@gmail.com]
 * @author Tarso Bessa [tarso.bessa@gmail.com]
 */
@Entity
@Table(name = "TB_CUSTOMER")
public class Customer implements Serializable {

	/**
	 * Serial number
	 */
	private static final long serialVersionUID = 3393929218453679926L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "CD_CUST")
	private Integer id;

	/**
	 * Customer name
	 */
	@Column(name = "NM_CUST")
	private String name;

	/**
	 * Email
	 */
	@Column(name = "EM_CUST")
	private String email;

	/**
	 * Login of the customer
	 */
	@Column(name = "LG_CUST")
	private String login;

	/**
	 * Yes. It's the password.
	 */
	@Column(name = "PS_CUST")
	private String pass;

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

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getLogin() {
		return login;
	}

	public void setLogin(String login) {
		this.login = login;
	}

	public String getPass() {
		return pass;
	}

	public void setPass(String pass) {
		this.pass = pass;
	}
}
