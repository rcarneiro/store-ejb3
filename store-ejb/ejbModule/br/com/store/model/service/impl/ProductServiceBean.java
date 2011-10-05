package br.com.store.model.service.impl;

import java.util.List;

import javax.annotation.security.PermitAll;
import javax.ejb.EJB;
import javax.ejb.Stateless;
import javax.jws.WebMethod;
import javax.jws.WebService;

import br.com.store.model.dao.ProductDAO;
import br.com.store.model.entity.Order;
import br.com.store.model.entity.Product;
import br.com.store.model.service.ProductService;

/**
 * Implementation of {@link ProductService}. This class is a Web service.
 * 
 * @author Rafael Carneiro [rafaelcarneirob@gmail.com]
 * @author Tarso Bessa [tarso.bessa@gmail.com]
 */

@WebService
@Stateless
public class ProductServiceBean implements ProductService {

	/*
	 * DI for ProductDAO
	 */
	@EJB
	private ProductDAO productDAO;

	/*
	 * This method will be generated and included in WSDL file, because it
	 * contains the annotation @WebMethod.
	 * 
	 * (non-Javadoc)
	 * 
	 * @see br.com.store.model.service.ProductService#getAll()
	 */
	@Override
	@PermitAll
	@WebMethod
	public List<Product> getAll() {
		return this.productDAO.getAll();
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * br.com.store.model.service.ProductService#updateStock(br.com.store.model
	 * .entity.Order)
	 */
	@Override
	public void updateStock(Order order) {

		Integer idProduct = order.getItemsList().get(0).getProduct().getId();

		Integer qtdeProductChose = order.getItems().size();

		Product product = this.productDAO.getProductById(idProduct);

		product.setQtde(product.getQtde() - qtdeProductChose);

		this.productDAO.update(product);

	}

}
