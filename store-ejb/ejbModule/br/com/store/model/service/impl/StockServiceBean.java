package br.com.store.model.service.impl;

import javax.annotation.PostConstruct;
import javax.annotation.Resource;
import javax.ejb.Stateless;
import javax.ejb.Timeout;
import javax.ejb.Timer;
import javax.ejb.TimerService;
import javax.jms.JMSException;

import br.com.store.model.service.ProductService;
import br.com.store.model.service.StockService;

/**
 * Timer Service implementation of {@link ProductService} interface.
 * 
 * @author Rafael Carneiro [rafaelcarneirob@gmail.com]
 * @author Tarso Bessa [tarso.bessa@gmail.com]
 */

@Stateless
public class StockServiceBean implements StockService {

	@Resource
	private TimerService timerService;

	@PostConstruct
	public void scheduleCheckStock() {

		timerService.createTimer(System.currentTimeMillis() + 5000, null);

	}

	/*
	 * This method will called by container when the time it´s over.
	 */
	@Timeout
	public void checkStock(Timer timer) throws JMSException {

		System.out.println("Checking stock...");

		/*
		 * Repeating the schedule
		 */
		this.scheduleCheckStock();
	}
}
