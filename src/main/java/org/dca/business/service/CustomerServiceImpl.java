package org.dca.business.service;

import javax.transaction.Transactional;

import org.dca.business.model.Customer;
import org.dca.business.repository.CustomerRepository;
import org.dca.business.service.email.EmailEvent;
import org.dca.business.service.email.EmailEventDispatcher;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class CustomerServiceImpl implements CustomerService {
	
	@Autowired
	private CustomerRepository customerRepository;
	
	@Autowired
	private EmailEventDispatcher emailEventDispatcher;

	@Override
	@Transactional
	public Customer saveCustomer(Customer customer) {
//		EmailEvent emailEvent = new EmailEvent(this);
//		emailEvent.setSubject("The test email");
//		emailEvent.setText("The body type");

	
	 Customer customer2 = customerRepository.save(customer);
	// emailEventDispatcher.dispatchEmailGenerationEvent(emailEvent);	
     return customer2;	
    
	}

	
	@Override
	public Customer findById(Long Id) {
		return customerRepository.findOne(Id);
	}

	@Override
	public void deleteCustomer(Long Id) {
		customerRepository.delete(Id);
	}
	

}
