package org.dca.business.service;

import org.dca.business.model.Customer;

public interface CustomerService {
	
	public void saveCustomer(Customer customer);
	
	public Customer findById(Long Id);
	
	public void deleteCustomer(Long Id);

}
