package org.dca.business;

import org.dca.business.model.Customer;
import org.dca.business.service.CustomerService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CustomerController {
	
	protected Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	private CustomerService customerService;
	
	@RequestMapping(
            value = "/api/greetings",
            method = RequestMethod.GET,
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Customer> createGreeting(
            @RequestBody Customer customer) {
        logger.info("> createGreeting");

        Customer customer2 = new Customer();
        customer2.setEmail("nirmal1067@gmail");
        customer2.setLastName("Singh");
        customer2.setFirstName("Nirmal");
        
        Customer savedGreeting = customerService.saveCustomer(customer);

        logger.info("< createGreeting");
        return new ResponseEntity<Customer>(savedGreeting, HttpStatus.CREATED);
    }
	
	@RequestMapping(
            value = "/api/customer",
            method = RequestMethod.GET)
    public void createGreeting() {
        logger.info("> createGreeting");

        Customer customer2 = new Customer();
        customer2.setEmail("nirmal1067@gmail");
        customer2.setLastName("Singh");
        customer2.setFirstName("Nirmal");
        
        Customer savedGreeting = customerService.saveCustomer(customer2);

        logger.info("< createGreeting");
        //return new ResponseEntity<Customer>(savedGreeting, HttpStatus.CREATED);
    }

}
