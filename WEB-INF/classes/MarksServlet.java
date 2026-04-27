import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class MarksServlet extends HttpServlet {

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws IOException {

        response.setContentType("text/html");
        PrintWriter out = response.getWriter();

        try {
            int m1 = Integer.parseInt(request.getParameter("m1"));
            int m2 = Integer.parseInt(request.getParameter("m2"));
            int m3 = Integer.parseInt(request.getParameter("m3"));
            int m4 = Integer.parseInt(request.getParameter("m4"));
            int m5 = Integer.parseInt(request.getParameter("m5"));

            int total = m1 + m2 + m3 + m4 + m5;
            double avg = total / 5.0;

            out.println("<h2>Total Marks: " + total + "</h2>");
            out.println("<h2>Average Marks: " + avg + "</h2>");
            out.println("<h2>@24071A05F4</h2>");

        } catch (NumberFormatException e) {
            out.println("<h3>Invalid input. Enter numbers only</h3>");
        }
    }
}