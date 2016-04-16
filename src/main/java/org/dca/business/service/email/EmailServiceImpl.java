package org.dca.business.service.email;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Component;

@Component
public class EmailServiceImpl implements EmailService{
	
	@Autowired
	private  JavaMailSender javaMailSender;

	@Override
	public void sendEmail(EmailEvent email) {
		SimpleMailMessage mailMessage = new SimpleMailMessage();
        mailMessage.setTo("sanigita.n.singh@gmail.com");
        mailMessage.setReplyTo("nirmal1067@gmail.com");
        mailMessage.setFrom("nirmal1067@gmail.com");
        mailMessage.setSubject(email.getSubject());
        mailMessage.setText(email.getText());
        javaMailSender.send(mailMessage);
		
	}

//	@Override
//	public void onApplicationEvent(EmailEvent email) {
//		// TODO Auto-generated method stub
//		sendEmail(email);
//	}

}
