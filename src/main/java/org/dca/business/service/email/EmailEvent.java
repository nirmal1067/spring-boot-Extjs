package org.dca.business.service.email;

import org.springframework.context.ApplicationEvent;

public class EmailEvent extends ApplicationEvent{
	
	public EmailEvent(Object source,String text,String subject) {
		super(source);
		this.text=text;
		this.subject=subject;
		// TODO Auto-generated constructor stub
	}
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private String to;
	private String from;
	private String subject;
	private String text;
	private String cc;
	public String getTo() {
		return to;
	}
	public void setTo(String to) {
		this.to = to;
	}
	public String getFrom() {
		return from;
	}
	public void setFrom(String from) {
		this.from = from;
	}
	public String getSubject() {
		return subject;
	}
	public void setSubject(String subject) {
		this.subject = subject;
	}
	public String getText() {
		return text;
	}
	public void setText(String text) {
		this.text = text;
	}
	public String getCc() {
		return cc;
	}
	public void setCc(String cc) {
		this.cc = cc;
	}

}
