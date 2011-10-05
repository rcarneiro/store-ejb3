<%@ page language="java" contentType="text/html; charset=ISO-8859-1" %>

<%@include file="/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Login</title>
</head>
<body style="font-family:Verdana; font-size:12px">
<form class="formularioLogin" action="${pageContext.request.contextPath}/j_security_check" method="post">
      
		<fieldset style="width:180px">
		  <legend><img width="50px" src="images/cadeado.jpg" border="0"/></legend>		
				Login: <input type="text" class="form" value="" name="j_username"/><br>
				Senha: <input type="password" class="form" value="" name="j_password"/><br>			
				<input type="submit" alt="Acessar"  value="Acessar" class="acessar"/>			
		</fieldset>
				</form>

    <c:if test="${param.error ne null}">
        <span style="color:red">Login ou senha inválidos.</span>
    </c:if>

</body>
</html>