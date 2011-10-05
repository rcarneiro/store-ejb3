package br.com.store.view;

import java.io.IOException;

import javax.faces.context.FacesContext;
import javax.faces.event.ActionEvent;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * Class responsible for the logout.
 * 
 * @author Tarso Bessa [tarso.bessa@gmail.com]
 * @author Rafael Carneiro [rafaelcarneirob@gmail.com]
 * 
 */
public class LogoutServlet extends HttpServlet {
	
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
				req.getSession().invalidate();
				//req.getRequestDispatcher("/faces/index.jsp").forward(req, resp);
				resp.sendRedirect(req.getContextPath() + "/faces/index.jsp");
	}
	
	
}
