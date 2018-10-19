package com.expertmedics.beans;

public class UserPojo {
    private String userName ;
	private String userID ;
	private String phNO ;
	private String country ;
	private String location ;
	private String emailID ;
	private AddressPojo address ;
	
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getUserID() {
		return userID;
	}
	public void setUserID(String userID) {
		this.userID = userID;
	}
	public String getPhNO() {
		return phNO;
	}
	public void setPhNO(String phNO) {
		this.phNO = phNO;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public String getEmailID() {
		return emailID;
	}
	public void setEmailID(String emailID) {
		this.emailID = emailID;
	}
	public AddressPojo getAddress() {
		return address;
	}
	public void setAddress(AddressPojo address) {
		this.address = address;
	}
	
}
