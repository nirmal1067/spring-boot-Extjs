package org.dca.business.service.email;

import org.springframework.context.ApplicationEventPublisher;
import org.springframework.stereotype.Component;

@Component
public class EmailEventDispatcher {
	
	private ApplicationEventPublisher applicationEventPublisher;
	
	public void dispatchEmailGenerationEvent( final EmailEvent emailEvent)
	{
		applicationEventPublisher.publishEvent(emailEvent);
	}

}
