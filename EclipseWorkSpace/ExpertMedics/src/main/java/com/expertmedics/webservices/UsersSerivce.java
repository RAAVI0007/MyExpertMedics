package com.expertmedics.webservices;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.expertmedics.beans.AddressPojo;
import com.expertmedics.beans.UserPojo;

@RestController
public class UsersSerivce {

	
	List<UserPojo> usersPojo = new ArrayList<>() ;
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping("/listUsers")
	public List<UserPojo> getListUsers() {
		usersPojo = new ArrayList<>() ;
		UserPojo p1 = new UserPojo() ;
		p1.setUserID("1");
		p1.setUserName("Ravi");
		p1.setPhNO("9866272346");
		p1.setCountry("India");
		p1.setLocation("Hyderabad");	
		p1.setEmailID("ravi.devireddy07@gmail.com");
		AddressPojo ad1 = new AddressPojo() ;
		ad1.setCity("Hyderabad");
		ad1.setCountry("india");
		ad1.setState("TG");
		ad1.setZipCode("5000072");
		p1.setAddress(ad1);
		UserPojo p2 = new UserPojo() ;
		p2.setUserID("2");
		p2.setUserName("Ram");
		p2.setPhNO("9908002520");
		p2.setCountry("India");
		p2.setLocation("D2 Location");
		p2.setEmailID("ravi.devireddy08@gmail.com");
		AddressPojo ad2 = new AddressPojo() ;
		ad2.setCity("Hyderabad-1");
		ad2.setCountry("india-1");
		ad2.setState("TG-1");
		ad2.setZipCode("5000073");
		p2.setAddress(ad2);
		UserPojo p3 = new UserPojo() ;
		p3.setUserID("3");
		p3.setUserName("Banana");
		p3.setPhNO("9866272348");
		p3.setCountry("India");
		p3.setLocation("D3 Location");
		p3.setEmailID("ravi.devireddy09@gmail.com");
		AddressPojo ad3 = new AddressPojo() ;
		ad3.setCity("Hyderabad-2");
		ad3.setCountry("india-2");
		ad3.setState("TG-2");
		ad3.setZipCode("5000074");
		p3.setAddress(ad3);
		
		usersPojo.add(p1) ; usersPojo.add(p2) ;usersPojo.add(p3) ; 
		return usersPojo ;
	}
	
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping("/listUsers/{userName}")
	public UserPojo getUserDetails(@PathVariable String userName) {
		System.out.println("inside getUserDetails with ID" + usersPojo);
		return usersPojo.stream().filter(pojo -> pojo.getUserName().equalsIgnoreCase(userName)).collect(Collectors.toList()).get(0) ;
		
	}
	
	
}
