package org.dca.business.core;

import javax.persistence.NoResultException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class ControllerInterceptor {
	
	  protected Logger logger = LoggerFactory.getLogger(this.getClass());

	    /**
	     * Handles JPA NoResultExceptions thrown from web service controller
	     * methods. Creates a response with an empty body and HTTP status code 404,
	     * not found.
	     * 
	     * @param nre A NoResultException instance.
	     * @return A ResponseEntity with an empty response body and HTTP status code
	     *         404.
	     */
	    @ExceptionHandler(NoResultException.class)
	    public ResponseEntity<Exception> handleNoResultException(
	            NoResultException nre) {
	        logger.error("> handleNoResultException");
	        logger.error("- NoResultException: ", nre);
	        logger.error("< handleNoResultException");
	        return new ResponseEntity<Exception>(HttpStatus.NOT_FOUND);
	    }

	    /**
	     * Handles all Exceptions not addressed by more specific
	     * <code>@ExceptionHandler</code> methods. Creates a response with the
	     * Exception detail in the response body as JSON and a HTTP status code of
	     * 500, internal server error.
	     * 
	     * @param e An Exception instance.
	     * @return A ResponseEntity containing a the Exception attributes in the
	     *         response body and a HTTP status code 500.
	     */
	    @ExceptionHandler(Exception.class)
	    public ResponseEntity<Exception> handleException(Exception e) {
	        logger.error("> handleException");
	        logger.error("- Exception: ", e);
	        logger.error("< handleException");
	        return new ResponseEntity<Exception>(e,
	                HttpStatus.INTERNAL_SERVER_ERROR);
	    }

}
