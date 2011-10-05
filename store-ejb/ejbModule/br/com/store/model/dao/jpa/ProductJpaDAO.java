package br.com.store.model.dao.jpa;

import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import br.com.store.model.dao.ProductDAO;
import br.com.store.model.entity.Product;

/**
 * JPA implementation of {@link ProductDAO} interface. Could be any
 * implementation, like Hibernate, iBatis, JDBC, etc.
 * 
 * @author Rafael Carneiro [rafaelcarneirob@gmail.com]
 * @author Tarso Bessa [tarso.bessa@gmail.com]
 */
@Stateless
public class ProductJpaDAO implements ProductDAO {

	/*
	 * DI of EntityManager
	 */
	@PersistenceContext(unitName = "store")
	private EntityManager entityManager;

	/*
	 * (non-Javadoc)
	 * 
	 * @see br.com.store.model.dao.ProductDAO#getAll()
	 */
	@Override
	@SuppressWarnings("unchecked")
	public List<Product> getAll() {

		Query query = entityManager.createQuery("FROM "
				+ Product.class.getName());

		return (List<Product>) query.getResultList();

	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see br.com.store.model.dao.ProductDAO#getProductById(java.lang.Integer)
	 */
	@Override
	public Product getProductById(Integer idProduct) {
		Product product = entityManager.find(Product.class, idProduct);

		return product;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see br.com.store.model.dao.ProductDAO#update(br.com.store.model.entity.Product)
	 */
	@Override
	public void update(Product product) {

		entityManager.merge(product);

	}
}
