<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@include file="/taglibs.jsp"%>

<f:view>

	<trh:html>
	<head>
<%@include file="/includes.jsp"%>	  
	  <trh:script></trh:script>
	</head>
	<trh:body>
		<tr:form>		
<%@include file="/userInfo.jsp" %>	
		<br/>
		   <tr:panelGroupLayout partialTriggers="cmdRefresh">
				<table width="75%" cellspacing="0" cellpadding="2" border="0">
				<tbody>
					<tr>
						<td class="pagetitle3">Compras</td>
					</tr>
					<tr>
						<td height="12" colspan="2"><img height="12" border="0"
							alt="" src="${pageContext.request.contextPath}/images/transparent.gif" /></td>
					</tr>
				</tbody>
				</table>
				
				<tr:panelGroupLayout rendered="#{ordersBean.lastOrder ne null}">
					<table width="75%" style="border: 1px solid;" cellspacing="0"
						cellpadding="4">
						<tr>
							<td>Última Compra</td>
						</tr>
						<tr>
							<td><tr:commandButton id="cmdRefresh" partialSubmit="true"
								text="Atualizar Status"></tr:commandButton>
								<tr:commandButton action="index" text="Nova Compra"></tr:commandButton>
							 <tr:panelFormLayout fieldWidth="90%">
								<tr:inputText readOnly="true" label="Número:"
									value="#{ordersBean.lastOrder.id}"></tr:inputText>
								<tr:inputText readOnly="true" label="Valor:"
									value="#{ordersBean.lastOrder.orderValue}"><f:convertNumber currencySymbol="R$" maxFractionDigits="2"
											minFractionDigits="2" /></tr:inputText>
								<tr:inputText readOnly="true" label="Status:"
									value="#{ordersBean.lastOrder.payment.status}"></tr:inputText>
							</tr:panelFormLayout></td>
						</tr>
					</table>
					<br/>
				<table width="75%" style="border: 1px solid;" cellspacing="0" cellpadding="4">
						<thead>
							<tr>
								<th colspan="2">Número</th>
								
								<th>Valor</th>
								<th>Status</th>
							</tr>
						</thead>
						<tr:iterator value="#{ordersBean.allOrders}"
							var="order">
							<tbody>
								<tr>
									<td valign="top" colspan="2" align="center" class="cmProdCat" >
									<tr:outputText value="#{order.id}"></tr:outputText></td>
									
									<td valign="top" align="center"><tr:outputText value="#{order.orderValue}"></tr:outputText></td>
									<td valign="top" align="right"><tr:outputText value="#{order.payment.status}">
										<f:convertNumber currencySymbol="R$" maxFractionDigits="2"
											minFractionDigits="2" />
									</tr:outputText></td>
								</tr>
							</tbody>
						</tr:iterator>						
					</table>	     
				
				
				
				
				
		     </tr:panelGroupLayout>
		      
		   </tr:panelGroupLayout>
		   
		</tr:form>
	</trh:body>
	</trh:html>

</f:view>