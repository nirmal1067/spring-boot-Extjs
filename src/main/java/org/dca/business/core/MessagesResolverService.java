package org.dca.business.core;

import java.util.Locale;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;

public class MessagesResolverService {
	
	@Autowired
	private MessageSource messageSource;
	
	public String messageValue(String key)
	{
		Locale locale = LocaleContextHolder.getLocale();
		return messageSource.getMessage(key, null, locale);
	}

}
