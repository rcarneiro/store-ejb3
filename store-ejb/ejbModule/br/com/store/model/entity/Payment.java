package br.com.store.model.entity;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Class who represents a Payment.
 * 
 * @author Rafael Carneiro [rafaelcarneirob@gmail.com]
 * @author Tarso Bessa [tarso.bessa@gmail.com]
 */
@Entity
@Table(name = "TB_PMT")
public class Payment implements Serializable {

	/**
	 * Serial number
	 */
	private static final long serialVersionUID = -3370779581796209835L;
	/**
	 * Constants for the status. This is not a guideline and we don't want to
	 * use enums in JPA, so this application is just a quick example. This
	 * example could be a Enum type.
	 */
	public static final String ST_SUBMITTED = "Submitted";
	public static final String ST_REFUSED = "Refused";
	public static final String ST_PROCESSED = "Processed";

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "CD_PMT")
	private Integer id;
	/**
	 * The value informed in the payment.
	 */
	@Column(name = "VR_PMT")
	private BigDecimal value;
	/**
	 * The status of the payment. 'Submitted', 'Refused', 'Processed'.
	 */
	@Column(name = "ST_PMT")
	private String status;

	/**
	 * Card number.
	 */
	@Column(name = "ST_CARD_NUMBER")
	private String cardNumber;

	/**
	 * Card name.
	 */
	@Column(name = "ST_CARD_NAME")
	private String cardName;

	/**
	 * Card date.
	 */
	@Column(name = "ST_CARD_DATE")
	private Date cardDate;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public BigDecimal getValue() {
		return value;
	}

	public void setValue(BigDecimal value) {
		this.value = value;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getCardNumber() {
		return cardNumber;
	}

	public void setCardNumber(String cardNumber) {
		this.cardNumber = cardNumber;
	}

	public String getCardName() {
		return cardName;
	}

	public void setCardName(String cardName) {
		this.cardName = cardName;
	}

	public Date getCardDate() {
		return cardDate;
	}

	public void setCardDate(Date cardDate) {
		this.cardDate = cardDate;
	}
}
