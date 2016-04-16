package org.dca.business.core;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.dca.business.service.email.EmailEvent;
import org.dca.business.service.email.EmailEventDispatcher;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class EmailTrigerringAspect {

	
//	@Pointcut(value="@annotation(org.dca.business.core.TriggerEmailEvent)")
//	public void anyPublicMethod() {
//	}
	
	@Autowired
	private EmailEventDispatcher emailEventDispatcher;
	
	//@Around("@annotation(org.dca.business.core.TriggerEmailEvent)")
	
	@After("@annotation(org.dca.business.core.TriggerEmailEvent)")
	public void logAction() throws Throwable {
 
		EmailEvent emailEvent = new EmailEvent(this);
		emailEvent.setSubject("The test email");
		emailEvent.setText("The body type");
		// Do what you want with the actionperformed
		//String actionPerformed = triggerEmailEvent.actionPerformed();
		emailEventDispatcher.dispatchEmailGenerationEvent(emailEvent);	
		// Do what you want with the join point arguments
//		for ( Object object : pjp.getArgs()) {
//			System.out.println(object);
//		}
 
		//return pjp.proceed();
	}
}
