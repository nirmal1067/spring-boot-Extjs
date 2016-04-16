package org.dca.business;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.session.SessionRegistry;
import org.springframework.security.web.util.AntPathRequestMatcher;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

	@Autowired
	public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
		auth.inMemoryAuthentication()
                   .withUser("nirmal").password("123456").roles("USER");
	}
	
	 static SessionRegistry SR;

	//.csrf() is optional, enabled by default, if using WebSecurityConfigurerAdapter constructor
	@Override
	protected void configure(HttpSecurity http) throws Exception {

		//http.l
	    http.authorizeRequests()
	    //.antMatchers("/resources/**", "/j_spring_security_check", "/about").permitAll() 
	   // .anyRequest().authenticated()
		.antMatchers("/api/**","/index.html").hasRole("USER")
		.anyRequest().authenticated()  // This is for avoiding other unauthenticated hit.
		//access("hasRole('USER')")
		.and()
		    .formLogin().loginPage("/login").permitAll()
		    .failureUrl("/login?error").loginProcessingUrl("/j_spring_security_check").defaultSuccessUrl("/index.html")
		    .usernameParameter("username").passwordParameter("password")		
		.and()
		    //.logout().logoutSuccessUrl("/login?logout")
		    .logout()
            .logoutRequestMatcher( new AntPathRequestMatcher( "/login?logout" ) )
            .logoutSuccessUrl( "/login?out=1" )
            .deleteCookies( "JSESSIONID" )
            .invalidateHttpSession( true )
            .and()
		    .csrf()
		    .and().sessionManagement()
		    .sessionCreationPolicy(SessionCreationPolicy.IF_REQUIRED) // its by default
		    .invalidSessionUrl("/invalid-session") // session-management@invalid-session-url
            .sessionAuthenticationErrorUrl("/session-auth-error") // session-management@session-authentication-error-url
            .maximumSessions(1) // session-management/concurrency-control@max-sessions
            .maxSessionsPreventsLogin(true) // session-management/concurrency-control@error-if-maximum-exceeded
            .expiredUrl("/expired-session") // session-management/concurrency-control@expired-url
            .sessionRegistry(SR) ; 		
	}
}
