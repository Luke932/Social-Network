package teamSviluppo.socialNetwork_BE.payload;

import lombok.ToString;

public record UtentePayloadLogin(String usernameOrEmail, String password){
}
