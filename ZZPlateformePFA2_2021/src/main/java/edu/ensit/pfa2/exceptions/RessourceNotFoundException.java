package edu.ensit.pfa2.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class RessourceNotFoundException extends Exception{
     
	  private static final long serialVersionUID = 1L;
	  public RessourceNotFoundException(String message){
	    	//super(message);
	    }

	

	
}
