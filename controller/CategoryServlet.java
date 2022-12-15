package controller;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.concurrent.Callable;
import java.util.stream.Collectors;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.mysql.cj.jdbc.CallableStatement;


@WebServlet("/category")
public class CategoryServlet extends HttpServlet {
    
    ArrayList<Adlist> tableList = new ArrayList<Adlist>();

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        tableList.clear();
        String requestData = req.getReader().lines().collect(Collectors.joining());
        Gson gg=new Gson();
       Content cc=gg.fromJson(requestData,Content.class);
       
        try (Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/justdial", "root", "")) {
        
        //System.out.println(cc.getData());
        String strSelect = "select * from  addetails where category=?";
           java.sql.CallableStatement ca = con.prepareCall(strSelect);
            ca.setString(1, cc.getData());
            System.out.println("exxd");
          ResultSet rslt=ca.executeQuery();
          System.out.println("vfdv");
    
           while (rslt.next()) {
              int Id = rslt.getInt("id");
              String a_name = rslt.getString("a_name");
              int phoneNo = rslt.getInt("phoneNo");
              int flatNo = rslt.getInt("flatNo");
              String street = rslt.getString("street");
              String city = rslt.getString("city");
              String state = rslt.getString("state");
              String country = rslt.getString("country");
              int pincode = rslt.getInt("Pincode");
              String category = rslt.getString("category");
              String sub_category = rslt.getString("sub_category");
              String open_time = rslt.getString("open_time");
              String close_time = rslt.getString("close_time");
              int ratings = rslt.getInt("ratings");
              System.out.println(Id + "," + a_name + ", " + phoneNo + "," + flatNo+ ","+ street+ "," + city+ "," +state+","+ country+ ","+pincode+ ","+category+","+sub_category+"," +open_time+","+close_time+","+ratings);
              tableList.add(new Adlist(Id, a_name,phoneNo,flatNo,street,city,state,country,pincode,category,sub_category,open_time,close_time,ratings));
           }
  
           Gson g = new Gson();
           String jd = g.toJson(tableList);
           resp.getWriter().print(jd);
  
        } catch (SQLException e) {
           e.printStackTrace();
        }
        
      }
   }

   
  