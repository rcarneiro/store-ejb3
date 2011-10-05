Passos

1 - extraia as pastas para seu workspace

2 - configure os servidores JBoss 4.2 e Tomcat 6.0 no eclipse 

3 - ao modificar o projeto store-ejb, lembre-se de gerar o .JAR do projeto e copiar para o diretório
WEB-INF/lib do projeto store-web

4 - no projeto store-ws-client, modifique a constante PATH_WSDL da classe ProductServiceBean_ProductServiceBeanPort_Client.java para:
${PATH_DO_SEU_WORKSPACE}\store-ws-client\wsdl\ProductService.wsdl

5 - gere o .EAR da sua aplicação no projeto store

6 - copie o arquivo gerado para ${PATH_DO_SEU_JBOSS}\server\default\deploy

7 - coloque a configuração A no arquivo ${PATH_DO_SEU_JBOSS}\server\default\conf\login-config.xml

8 - No diretório ${PATH_DO_SEU_JBOSS}\lib:
 
    - deixe apenas as libs: getopt.jar,jboss-jmx.jar e jboss-system.jar

9 - No diretório ${PATH_DO_SEU_JBOSS}\endorsed:

    - deixe apenas as libs: commons-codec.jar,commons-httpclient.jar,commons-logging.jar,concurrent.jar,
jaxb-api.jar,jboss-common.jar,jboss-jaxrpc.jar,jboss-saaj.jar,jboss-xml-binding.jar,log4j-boot.jar,
serializer.jar,xalan.jar e xercesImpl.jar

10 - se não encontrar nenhuma das libs citadas acima, procure-as em: ${PATH_DO_SEU_JBOSS}\client

11 - coloque o arquivo mysql-ds.xml no diretório ${PATH_DO_SEU_JBOSS}\server\default\deploy

12 - inicie o servidor de aplicação

13 - digite a seguinte URL no seu browser: http://localhost:8080/store/faces/index.jsp


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

Configurações

IDE: Eclipse Europa
Servidor de aplicação: JBoss v4.2
Servidor Web: Tomcat v6.0

Dúvidas

rafaelcarneirob@gmail.com






