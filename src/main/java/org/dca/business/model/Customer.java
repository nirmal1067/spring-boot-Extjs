package org.dca.business.model;

import javax.persistence.Entity;

import org.dca.security.model.TransactionalEntity;
@Entity
public class Customer extends TransactionalEntity{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private String firstName;
	private String lastName;
	private String dataRequirement;
	private String email;
	
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getDataRequirement() {
		return dataRequirement;
	}
	public void setDataRequirement(String dataRequirement) {
		this.dataRequirement = dataRequirement;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	

}
