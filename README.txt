Steps

1 - extract to your eclipse workspace

2 - configure the servers JBoss 4.2 and Tomcat 6.0 on eclipse 

3 - if you modify the store-ejb project, remember of generate the .JAR and copy for
WEB-INF/lib (store-web)

4 - in project store-ws-client, modify the constant PATH_WSDL of class ProductServiceBean_ProductServiceBeanPort_Client.java to:
${YOUR_WORKSPACE_PATH}\store-ws-client\wsdl\ProductService.wsdl

5 - generate the .EAR (project store)

6 - copy the generated file to ${PATH_OF_YOUR_JBOSS}\server\default\deploy

7 - put the configuration of letter A (below) into file ${PATH_OF_YOUR_JBOSS}\server\default\conf\login-config.xml

8 - In directory ${PATH_OF_YOUR_JBOSS}\lib:
 
    - leave only the libs: getopt.jar,jboss-jmx.jar e jboss-system.jar

9 - In directory ${PATH_OF_YOUR_JBOSS}\lib\endorsed:

    - leave only the libs: commons-codec.jar,commons-httpclient.jar,commons-logging.jar,concurrent.jar,
jaxb-api.jar,jboss-common.jar,jboss-jaxrpc.jar,jboss-saaj.jar,jboss-xml-binding.jar,log4j-boot.jar,
serializer.jar,xalan.jar e xercesImpl.jar

10 - if your don't find any libs mentioned above, find them: ${PATH_OF_YOUR_JBOSS}\client

11 - put the file mysql-ds.xml in directory ${PATH_OF_YOUR_JBOSS}\server\default\deploy

12 - start the application server (JBoss)

13 - type in your browser: http://localhost:8080/store/faces/index.jsp

----

A


   <application-policy name="storeDB">
        <authentication>
            <login-module code="org.jboss.security.auth.spi.DatabaseServerLoginModule"
                             flag="required">
                <module-option name="dsJndiName">java:/StoreDS</module-option>
		<module-option name="unauthenticatedIdentity">anonymous</module-option>
                <module-option name="principalsQuery">
                    SELECT ps_cust as passwd FROM tb_customer t where lg_cust=?</module-option>
                <module-option name="rolesQuery">
                    SELECT name as userRoles, 'Roles' FROM tb_roles roles inner join tb_customer cust on roles.id_user = cust.cd_cust where cust.lg_cust=?</module-option>
            </login-module>
        </authentication>
    </application-policy>



----

Configurations

IDE: Eclipse
Application server: JBoss v4.2

Questions

Blog: www.rafaelcarneiro.com
E-mail: rafaelcarneirob@gmail.com
My JUG: www.cejug.org
My Linkedin profile: www.linkedin.com/in/rafaelcarneiro








