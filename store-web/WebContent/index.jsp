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

			<table width="50%" cellspacing="0" cellpadding="0" border="0">
				<tbody>
					<tr>
						<td valign="top">
						<table width="100%" cellspacing="0" cellpadding="4" border="0">
							<tbody>
								<tr>
									<td class="pagetitle3">Produtos</td>
								</tr>
							</tbody>
						</table>
						<table width="100%" cellspacing="0" cellpadding="4" border="0">
							<tbody>
								<tr>
									<td height="10" colspan="2"><img height="10" border="0"
										alt=""
										src="${pageContext.request.contextPath}/images/transparent.gif" /></td>
								</tr>
								<tr>
									<td style="padding: 5px;" colspan="2"><!-- Lista de produtos -->
									<table width="100%" cellspacing="7" cellpadding="0" border="0"
										style="background-color: rgb(238, 238, 238);">
										<tbody>
											<tr>
												<tr:iterator id="tblItems" value="#{cartBean.productsList}"
													var="product" varStatus="listStatus">
													<f:verbatim
														rendered="#{(listStatus.index gt 0) and (listStatus.index % 2 == 0)}">
											</tr>
											<tr>
												</f:verbatim>
												<td width="33%" valign="top" align="center"
													style="background-color: rgb(255, 255, 255);">


												<table class="thumbnail_cont" width="100%" cellspacing="0"
													cellpadding="0" border="0" valign="top">
													<tbody>
														<tr>
															<td align="center" style="height: 100px;" colspan="2">
															<tr:image source="/images/#{product.id}.jpg"></tr:image></td>
														</tr>
														<tr />
														<tr>
															<td
																style="border-top: 1px solid rgb(199, 199, 199); height: 5px;"
																colspan="2" />
														</tr>
														<tr>
															<td align="left" style="padding: 0px 0px;" colspan="2">
															<tr:outputText value="#{product.name}" /></td>
														</tr>
														<tr>
															<td />
														</tr>
														<td align="left">Preço:</td>
														<td align="left">R$ <tr:outputText
															value="#{product.price}">
															<f:convertNumber currencySymbol="R$"
																maxFractionDigits="2" minFractionDigits="2" />
														</tr:outputText></td>
														<tr>
															<td align="left"><tr:commandButton id="cmdAddProd"
																partialSubmit="true" text="Adicionar"
																actionListener="#{cartBean.addProduct}">
																<tr:setActionListener from="#{product}"
																	to="#{cartBean.choosenProduct}" />
															</tr:commandButton></td>
														</tr>
														<tr>
															<td height="10" colspan="2"><img height="10"
																border="0" alt=""
																src="${pageContext.request.contextPath}/images/transparent.gif" /></td>
														</tr>
													</tbody>
												</table>
												</td>
												</tr:iterator>
											</tr>
										</tbody>
									</table>
									</td>
								</tr>
							</tbody>
						</table>
						</td>
						<td />
						<td width="170" valign="top" align="left">
						<table id="cart" width="100%" cellspacing="0" cellpadding="0"
							border="0">
							<tbody>
								<tr>
									<td>&nbsp;</td>
								</tr>
								<tr>
									<td>&nbsp;</td>
								</tr>
								<tr>
									<td>&nbsp;</td>
								</tr>
								<tr>
									<td width="100%"><!-- Carrinho -->
									<div class="e14">
									<div class="e14v1">
									<div class="cornerTL">
									<div class="cornerTR" /></div>
									<div class="pad">
									<table width="100%" cellspacing="0" cellpadding="0" border="0">
										<tbody>
											<tr>
												<td>
												<h3
													style="background: transparent none repeat scroll 0%; -moz-background-clip: -moz-initial; -moz-background-origin: -moz-initial; -moz-background-inline-policy: -moz-initial; color: rgb(0, 0, 0);">
												Seu Carrinho</h3>
												</td>
												<td style="text-align: right;"></td>
											</tr>
											<tr id="myCart1">
												<td colspan="2">
												<table width="100%" cellspacing="0" cellpadding="0"
													border="0">
													<tbody>
														<tr>
															<td height="4" colspan="3"><img height="4"
																border="0" alt=""
																src="${pageContext.request.contextPath}/images/transparent.gif" /></td>
														</tr>
														<tr>
															<td />
															<td><tr:panelGroupLayout id="pnlCart"
																binding="#{cartBean.pnlCart}">
																<tr:outputText
																	rendered="#{cartBean.order['empty'] eq true}"
																	value="Seu carrinho está vazio."></tr:outputText>

																<tr:table binding="#{cartBean.tblOrderItems}"
																	rendered="#{cartBean.order['empty'] eq false}"
																	value="#{cartBean.order.itemsList}" var="item">
																	<tr:column align="start" headerText=" ">
																		<tr:commandLink
																			actionListener="#{cartBean.removeItem}" text="x"
																			partialSubmit="true" />
																	</tr:column>
																	<tr:column noWrap="true"  headerText="Produto">
																		<tr:outputText value="#{item.product.name}"></tr:outputText>
																	</tr:column>
																	<tr:column align="center" headerText="Quantidade">
																		<tr:inputText contentStyle="width:30px" simple="true"
																			value="#{item.quantity}" autoSubmit="true"
																			valueChangeListener="#{cartBean.updateQuantity}" />
																	</tr:column>
																	<tr:column align="end" headerText="Valor">
																		<tr:outputText value="#{item.itemValue}">
																			<f:convertNumber currencySymbol="R$"
																				maxFractionDigits="2" minFractionDigits="2" />
																		</tr:outputText>
																	</tr:column>

																	<f:facet name="footer">
																		<tr:panelGroupLayout>
																			<tr:outputLabel value="Total: " />
																			<tr:outputText value="#{cartBean.order.orderValue}">
																				<f:convertNumber currencySymbol="R$"
																					maxFractionDigits="2" minFractionDigits="2" />
																			</tr:outputText>
																		</tr:panelGroupLayout>
																	</f:facet>
																</tr:table>
																<tr:goLink
																	rendered="#{cartBean.order['empty'] eq false}"
																	destination="/faces/payment.jsp" text="Fechar Compra"></tr:goLink>
															</tr:panelGroupLayout></td>
															<td />
														</tr>
														<tr>
															<td height="4" colspan="3"><img height="4"
																border="0" alt=""
																src="${pageContext.request.contextPath}/images/transparent.gif" /></td>
														</tr>
													</tbody>
												</table>
												</td>
											</tr>
										</tbody>
									</table>
									</div>
									<div class="cornerBL">
									<div class="cornerBR" /></div>
									</div>
									</div>
									</td>
								</tr>
							</tbody>
						</table>
						</td>
					</tr>
				</tbody>
			</table>
		</tr:form>
	</trh:body>
	</trh:html>

</f:view>