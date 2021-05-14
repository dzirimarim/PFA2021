package edu.ensit.pfa2.entity;

import javax.persistence.Column;  
import javax.persistence.Entity;  
import javax.persistence.GeneratedValue;  
import javax.persistence.GenerationType;  
import javax.persistence.Id;  
import javax.persistence.Table;  
  
@Entity  
@Table(name="Token")  
public class Token {  
      
    @Id  
    @GeneratedValue(strategy=GenerationType.AUTO)  
    @Column(name="token_id")  
    private int tokenID;  
      
    @Column(name="user_id" , unique=true)  
    private int userID;  
       
    @Column(name="authenticationToken")  
    private String authenticationToken;  
      
    @Column(name="secretKey")  
    private String secretKey;  
      
    @Column(name="email_id")  
    private String emailId;  
      
    public Token() { }  
  
    public Token(int tokenID, int userID, String authenticationToken, String secretKey, String emailId) {  
        super();  
        this.tokenID = tokenID;  
        this.userID = userID;  
        this.authenticationToken = authenticationToken;  
        this.secretKey = secretKey;  
        this.emailId = emailId;  
    }  
  
    public int getTokenID() {  
        return tokenID;  
    }  
  
    public void setTokenID(int tokenID) {  
        this.tokenID = tokenID;  
    }  
  
    public int getUserID() {  
        return userID;  
    }  
  
    public void setUserID(int userID) {  
        this.userID = userID;  
    }  
  
    public String getAuthenticationToken() {  
        return authenticationToken;  
    }  
  
    public void setAuthenticationToken(String authenticationToken) {  
        this.authenticationToken = authenticationToken;  
    }  
  
    public String getSecretKey() {  
        return secretKey;  
    }  
  
    public void setSecretKey(String secretKey) {  
        this.secretKey = secretKey;  
    }  
  
    public String getEmailId() {  
        return emailId;  
    }  
  
    public void setEmailId(String emailId) {  
        this.emailId = emailId;  
    }  
  
    @Override  
    public String toString() {  
        return "Token [tokenID=" + tokenID + ", userID=" + userID + ", authenticationToken=" + authenticationToken  
                + ", secretKey=" + secretKey + ", emailId=" + emailId + "]";  
    }  
  
      
}  