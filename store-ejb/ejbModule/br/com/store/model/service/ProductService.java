package br.com.store.model.service;

import java.util.List;

import javax.ejb.Remote;

import br.com.store.model.entity.Order;
import br.com.store.model.entity.Product;

/**
 * Interface that represents the business contract of product.
 * 
 * @author Rafael Carneiro [rafaelcarneirob@gmail.com]
 * @author Tarso Bessa [tarso.bessa@gmail.com]
 */

@Remote
public interface ProductService {

	/**
	 * Returns the list of all products
	 * 
	 * @return
	 */
	public List<Product> getAll();

	/**
	 * Update the stock (quantity of products).
	 * 
	 * @param order
	 */
	public void updateStock(Order order);
}
