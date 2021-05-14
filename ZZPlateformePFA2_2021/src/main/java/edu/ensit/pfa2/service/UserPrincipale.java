package edu.ensit.pfa2.service;

import java.util.Collection;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import com.fasterxml.jackson.annotation.JsonIgnore;

import edu.ensit.pfa2.entity.UserEnt;



public class UserPrincipale implements UserDetails {
	private static final long serialVersionUID = 1L;

	private Long id;
    private String name;
    private String username;
    private String email;
    private boolean isActive;
    @JsonIgnore
    private String password;
    
    private Collection<? extends GrantedAuthority> authorities;

    public UserPrincipale(Long id, String name,String username, boolean isActive, 
			    		String email, 
			    		String password, 
			    		Collection<? extends GrantedAuthority> authorities) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.isActive = isActive;
        this.email = email;
        this.password = password;
        this.authorities = authorities;
    }

    public static UserPrincipale build(UserEnt user) {
        List<GrantedAuthority> authorities = user.getRoles().stream().map(role ->
                new SimpleGrantedAuthority(role.getRoleName().name())
        ).collect(Collectors.toList());

        return new UserPrincipale(
                user.getId(),
                user.getName(),
                user.getUsername(),
                user.isActivated(),
                user.getEmail(),
                user.getPassword(),
                authorities
        );
    }

    public Long getId() {
        return id;
    }


    public String getEmail() {
        return email;
    }



    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return isActive;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        
        UserPrincipale user = (UserPrincipale) o;
        return Objects.equals(id, user.id);
    }

	@Override
	public String getUsername() {
		
		return username;
	}

	

}