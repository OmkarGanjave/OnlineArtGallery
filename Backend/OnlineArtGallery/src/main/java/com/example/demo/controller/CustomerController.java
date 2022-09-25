package com.example.demo.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Artist;
import com.example.demo.model.Cart;
import com.example.demo.model.CartDetails;
import com.example.demo.model.Customer;
import com.example.demo.model.CustomerRegister;
import com.example.demo.model.Order;
import com.example.demo.model.OrderProduct;
import com.example.demo.model.Product;
import com.example.demo.model.User;
import com.example.demo.service.AdminService;
import com.example.demo.service.ArtistService;
import com.example.demo.service.CartDetailsService;
import com.example.demo.service.CartService;
import com.example.demo.service.CustomerService;
import com.example.demo.service.OrderService;
import com.example.demo.service.ProductService;
import com.example.demo.service.UserService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class CustomerController {

		@Autowired
		CustomerService cs;
		
		@Autowired
		UserService us;
		
		@Autowired
		ProductService pservice;
		
		@Autowired
		CartService cartServ;
		
		@Autowired
		CartDetailsService cdserv;
		
		@Autowired
		OrderService oserv;
		
		@Autowired
		ArtistService artistserv;
		
		@Autowired
		private AdminService adminserv;
		
		@Autowired
		JavaMailSender mailsender;
		
		@PostMapping("/register")
		public Customer saveCustomer(@RequestBody CustomerRegister cr) 
		{
			User user=new User(cr.getUserId(),cr.getRole(),cr.getPassword());
			User inserted=us.add(user);
			Customer customer=new Customer( cr.getFirstName(), cr.getLastName(),cr.getEmailId(),cr.getContactNo(),cr.getAddress(), inserted);
			
			try {
				SimpleMailMessage mailmsg=new SimpleMailMessage();
				mailmsg.setFrom("onlineartgallery10@gmail.com");
				mailmsg.setTo(cr.getEmailId());
				mailmsg.setSubject("Registration successful");
				mailmsg.setText("Welcome "+cr.getFirstName()+" your registraion for Online Art Gallery is Done Successfully.");
				mailsender.send(mailmsg);
				}
				catch (Exception e) {
					// TODO: handle exception
					System.out.println("Error in sending mail"+e);
					return null;
				}
			
			
			
			return cs.saveCustomer(customer);
		}
		
		@GetMapping("/allcustomers")
		public List<Customer> getAll()
		{
			return cs.getAll();
		}
		
		// add to cart
		@GetMapping("/addTocart/{loginid}/{productid}")
		public Cart addCart(@PathVariable("loginid") int loginid,@PathVariable("productid") int productId)
		{
			//System.out.println("login id :- "+loginid+"\tpid :- "+productId);
			// get customer from loginId
			Customer customer = cs.getCustomer(loginid);
			
			// get product
			Product product = pservice.getProduct(productId);
			
			// get customer
//			Customer customer = cs.getCustomerById(loginid);
//			
			// get cart
			Cart cart = customer.getCart();
			
			System.out.println("Cart:"+cart);
			
			// if cart is null , then create new cart
			if(null==cart) 
			{
	    		cart=new Cart();
	    		customer.setCart(cart);
		    	cart.setCustomerID(customer);
	    	}
			
			// cart details is null , then create new cart details
			if(null==customer.getCart().getCartdetails()) 
			{
				customer.getCart().setCartdetails(new ArrayList<CartDetails>());
			}
			
			System.out.println("size of cart:"+ customer.getCart().getCartdetails().size());
			
			CartDetails cartdeatils = new CartDetails();
			if(cdserv.checkProduct(cart, productId)) 
			{
				cartdeatils.setProduct(product);
				
				cartdeatils.setCart(cart);
				
				customer.getCart().getCartdetails().add(cartdeatils);
				
				cs.saveCustomer(customer);
			}
			
			return cart; 
		}
		
		// place order
		@GetMapping("/placeorder/{loginid}")
		public List<OrderProduct> placeOrder(@PathVariable("loginid") int loginid) 
		{
			double total_price = 00.0;
			int oid;
			List<OrderProduct> oplist = new ArrayList<OrderProduct>();
			//boolean flag = false;
			// 1
			// get customer			
			Customer customer = cs.getCustomer(loginid);	
			// 2
			// get cart
			Cart cart = customer.getCart();
			// get order list
			List<Order> odr = customer.getOrder();
	
			if(cart == null) 
			{
				return null;
			}
			else	
			{
				// 3
				List<CartDetails> orderlist = cart.getCartdetails();
				
				for (CartDetails ol : orderlist)
				{
	
					Product product = pservice.getProduct(ol.getProduct().getProductId());
					total_price += ol.getProduct().getPrice();
					OrderProduct op = new OrderProduct(product.getProductId(), product.getArtist().getArtistId(),product.getProductName(), product.getPrice());
					oplist.add(op);	
				}
				
					Order order = new Order();
					order.setCustomer(customer);
					order.setTotalPrice(total_price);
					odr.add(order);
					customer.setOrder(odr);
					//customer.getOrder();
					System.out.println(odr.toString());
					System.out.println("cart:"+customer.getOrder());
					oserv.saveOrder(order);
			}
			String msg=customer.getFirstName()+"\r\n"
					+ "Thank you for ordering from Online Art Gallery.\r\n"
					+ "\r\n"
					+ "Your order has been Placed.\r\n"
					+ "\r\n"
					+ "\r\n"
					+ "Any orders placed within an hour of each other may be shipped together."
					+" Your order will be shipped at youe  Address :"+customer.getAddress()
					+"\n\nWe hope you enjoyed your shopping experience with us and that you will visit us again soon.";
			// save data in orders table 
			try {
				SimpleMailMessage mailmsg=new SimpleMailMessage();
				mailmsg.setFrom("onlineartgallery10@gmail.com");
				mailmsg.setTo(customer.getEmailId());
				mailmsg.setSubject("Order placed");
				mailmsg.setText(msg);
				mailsender.send(mailmsg);
				}
				catch (Exception e) {
					// TODO: handle exception
					System.out.println("Error in sending mail"+e);
					return null;
				}
			return oplist;
//			return flag;	
			// order --> toatl_price , customerId
		}
		
		
		//artist Rating
		@GetMapping("/artistrating/{productId}/{rating}")
		public boolean artistRating(@PathVariable("productId") int productId,@PathVariable("rating") double rating) 
		{
			System.out.println("hii..............");
			boolean flag = true;
			
			// pid --> product
			Product product = pservice.getProduct(productId);
			
			//System.out.println("Artist :- "+product.getArtist().getArtistId());
			
			//System.out.println("rating :- "+rating);
			
			// get artist
			Artist artist =  artistserv.getArtistById(product.getArtist().getArtistId());
			
			System.out.println(artist.getFirstName()+"\t"+artist.getLastName());
		
			artist.setRating(rating);
			
			System.out.println("Artist rating :- "+artist.getRating());
			
			Artist savedArtist = artistserv.saveArtist(artist);
			
			return flag;
		}
		
		// search product categorywise
		@GetMapping("/categoryproduct/{categoryName}")
		public List<Product> getProdcutByCategory(@PathVariable("categoryName") String categotyName)
		{
			List<Product> categoryWiseProduct = new ArrayList<Product>();
			
			// active artist products 
			List<Product> plist = adminserv.allProducts();
			
			for (Product product : plist) 
			{
				if(product.getCategory().getCategoryName().equals(categotyName)) 
				{
					categoryWiseProduct.add(product);
				}
			}
			
			return categoryWiseProduct;
		}
		
		//view cart
		@GetMapping("/viewcart/{loginId}")
		public List<CartDetails> getCartofCustomer(@PathVariable("loginId") int loginId)
		{
			 
		
			Customer customer = cs.getCustomer(loginId);
			
			Cart cart = customer.getCart();
			
			List<CartDetails> cartdetails = cart.getCartdetails();
			
			return cartdetails;
		}
		
		@GetMapping("/removeproductfromcart/{productid}")
		public int removeFromCart(@PathVariable("productid") int productId)
		{
			
			return cdserv.removeProductFromCart(productId); 
		}
		
		@GetMapping("/custprofile/{loginId}")
		public Customer getProfile(@PathVariable("loginId") int loginId) 
		{
			return cs.getCustomer(loginId);
		}
	}


