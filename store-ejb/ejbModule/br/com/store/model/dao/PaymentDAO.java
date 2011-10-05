package br.com.store.model.dao;

import javax.ejb.Local;

import br.com.store.model.entity.Payment;

/**
 * Interface that represents the contract of data logic for {@link Payment}.
 * 
 * Remember: this interface don´t need to be an EJB.
 */
@Local
public interface PaymentDAO {

	/**
	 * Save the entity
	 * 
	 * @param payment
	 * @return
	 */
	public Payment save(Payment payment);

	/**
	 * Update the entity
	 * 
	 * @param payment
	 * @return
	 */
	public Payment update(Payment payment);

}
