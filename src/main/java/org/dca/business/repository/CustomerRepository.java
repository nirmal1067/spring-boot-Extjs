package org.dca.business.repository;

import org.dca.business.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Long, Customer>{

}
