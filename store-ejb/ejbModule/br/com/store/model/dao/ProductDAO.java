package br.com.store.model.dao;

import java.util.List;

import javax.ejb.Local;

import br.com.store.model.entity.Product;

/**
 * Interface that represents the contract of data logic for {@link Product}.
 * 
 * Remember: this interface don´t need to be an EJB.
 */

@Local
public interface ProductDAO {
	/**
	 * Returns the list of all products
	 * 
	 * @return
	 */
	public List<Product> getAll();

	/**
	 * Return an product by ID.
	 * 
	 * @param idProduct
	 * @return
	 */
	public Product getProductById(Integer idProduct);

	/**
	 * Update the entity
	 * 
	 * @param product
	 */
	public void update(Product product);
}
