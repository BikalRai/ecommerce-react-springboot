package com.raicod3.ecommerce.custom;

import com.raicod3.ecommerce.model.User;
import com.raicod3.ecommerce.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        // the username is email in this instance
        Optional<User> existingUser = userRepository.findByEmail(username);
        User user = existingUser.orElseThrow(() -> new UsernameNotFoundException("user not found"));

        return new CustomUserDetails(user);
    }
}
