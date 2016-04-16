package org.dca.rest.core;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.support.SessionStatus;
@RestController
public class SessionInvalidatorController {
	
	@RequestMapping(
            value = "/endSession",
            method = RequestMethod.GET)
	public void invalidateSession(SessionStatus sessionStatus)
	{
		sessionStatus.setComplete();
	}

}
