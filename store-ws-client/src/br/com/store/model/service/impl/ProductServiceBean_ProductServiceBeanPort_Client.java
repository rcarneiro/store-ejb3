
package br.com.store.model.service.impl;

/**
 * Please modify this class to meet your needs
 * This class is not complete
 */

import java.io.File;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.List;

import javax.xml.namespace.QName;

/**
 * This class was generated by the CXF 2.0.1-incubator
 * Sun Sep 28 16:50:18 BRT 2008
 * Generated source version: 2.0.1-incubator
 * 
 */

public final class ProductServiceBean_ProductServiceBeanPort_Client {

    private static final QName SERVICE_NAME = new QName("http://impl.service.model.store.com.br/", "ProductServiceBeanService");
    
    //Attention!
    private static final String WSDL_PATH = "PUT_YOUR_WSDL_LOCATION_HERE";

    private ProductServiceBean_ProductServiceBeanPort_Client() {
    }

    public static void main(String args[]) throws Exception {

      
        URL wsdlURL = null;
        File wsdlFile = new File(WSDL_PATH);
        try {
            if (wsdlFile.exists()) {
                wsdlURL = wsdlFile.toURL();
            } else {
                wsdlURL = new URL(WSDL_PATH);
            }
        } catch (MalformedURLException e) {
            e.printStackTrace();
        }
      
        ProductServiceBeanService ss = new ProductServiceBeanService(wsdlURL, SERVICE_NAME);
        ProductServiceBean port = ss.getProductServiceBeanPort();  
        

        System.out.println("Invoking getAll...");
        
        
        List<Product> lstProdutos = port.getAll();
        
        
        for (Product product : lstProdutos) {
			System.out.println(product.getName());
		}

        
        System.exit(0);
    }

}
