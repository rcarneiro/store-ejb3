package br.com.store.view.utils;

import java.util.logging.Level;
import java.util.logging.Logger;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;

/**
 * 
 * This class represent the design pattern Service Locator.
 * 
 * @author Rafael Carneiro [rafaelcarneirob@gmail.com]
 * @author Tarso Bessa [tarso.bessa@gmail.com]
 * 
 */
public final class ServiceLocator {

	static Logger logger = Logger.getLogger("ServiceLocator");

	/**
	 * This method obtains an object in JNDI Context. It don't work without the
	 * file jndi.properties
	 * 
	 * @param jndiName
	 * @return the instance of bean
	 */
	public static Object getService(String jndiName) {

		Object bean = null;

		try {
			Context context = new InitialContext();

			bean = context.lookup(jndiName);

		} catch (NamingException e) {
			logger.log(Level.SEVERE, e.getMessage());
		}

		return bean;
	}

}
