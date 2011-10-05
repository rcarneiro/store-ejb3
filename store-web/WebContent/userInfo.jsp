<%@include file="/taglibs.jsp"%>

<c:if test="${not empty pageContext.request.userPrincipal}">
   Bem vindo, ${pageContext.request.userPrincipal}
    &nbsp;|&nbsp; <a href="${pageContext.request.contextPath}/logout">Sair</a>
</c:if>