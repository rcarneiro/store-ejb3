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
		<tr:panelGroupLayout>
			<table width="75%" cellspacing="0" cellpadding="2" border="0">
				<tbody>
					<tr>
						<td class="pagetitle3">Pagamento</td>
					</tr>
					<tr>
						<td height="12" colspan="2"><img height="12" border="0"
							alt="" src="${pageContext.request.contextPath}/images/transparent.gif" /></td>
					</tr>
				</tbody>
				</table>
				<br/>
					
					<table width="75%" style="border: 1px solid;" cellspacing="0" cellpadding="4">
						<thead>
							<tr>
								<th colspan="2">Nome</th>
								
								<th>Qtde.</th>
								<th>Total</th>
							</tr>
						</thead>
						<tr:iterator value="#{cartBean.order.itemsList}"
							rendered="#{cartBean.order['empty'] eq false}" var="item">
							<tbody>
								<tr>
									<td valign="top" colspan="2" align="center" class="cmProdCat" ><tr:outputText
										value="#{item.product.name}"></tr:outputText></td>
									
									<td valign="top" align="center"><tr:outputText value="#{item.quantity}" /></td>
									<td valign="top" align="right"><tr:outputText
										value="#{item.itemValue}">
										<f:convertNumber currencySymbol="R$" maxFractionDigits="2"
											minFractionDigits="2" />
									</tr:outputText></td>
								</tr>
							</tbody>
						</tr:iterator>
						<tfoot>
							<tr>
							    
								<td colspan="4" align="right"><tr:outputLabel
									value="Total: " /> <tr:outputText
									value="#{cartBean.order.orderValue}">
									<f:convertNumber currencySymbol="R$" maxFractionDigits="2"
											minFractionDigits="2" />
									</tr:outputText></td>
							</tr>
						</tfoot>
					</table>
					
				

				<tr:messages></tr:messages>
				<table width="100%" height="180"
					cellspacing="0" cellpadding="4">
					<tbody>
						<tr>
							<td class="genericHeading" colspan="3">
							<div class="headerpadding">Dados do Pagamento</div>
							</td>
						</tr>
						<tr>
						<td height="4" colspan="3"><img height="4" border="0" alt=""
							src="${pageContext.request.contextPath}/images/transparent.gif" /></td>
						</tr>
						<tr>
							<td width="10" />
							<td class="accountLabel" width="1%" nowrap="nowrap">
							<tr:outputLabel value="Nome do Titular:" for="iptCardName"></tr:outputLabel> </td>
							<td class="accountData"><tr:inputText id="iptCardName" required="true"
								simple="true" value="#{cartBean.order.payment.cardName}"></tr:inputText></td>
						</tr>
						<tr>
							<td width="10" />
							<td class="accountLabel" width="1%" nowrap="nowrap">
							<tr:outputLabel value="Número do Cartão:" for="iptCardNumber"></tr:outputLabel> </td>
							<td class="accountData"><tr:inputText id="iptCardNumber" required="true"
								simple="true" 
								value="#{cartBean.order.payment.cardNumber}"></tr:inputText></td>
						</tr>
						<tr>
							<td width="10" colspan="2" />
							
							<td class="accountData">
							   <tr:commandButton
								action="#{cartBean.checkout}" text="Finalizar Compra">
								</tr:commandButton>
								 <tr:commandButton action="index"
								immediate="true" text="Adicionar Mais Produtos"></tr:commandButton>			  
							</td>
						</tr>
						
					</tbody>
				</table>

			</tr:panelGroupLayout>
		</tr:form>
	</trh:body>
	</trh:html>

</f:view>