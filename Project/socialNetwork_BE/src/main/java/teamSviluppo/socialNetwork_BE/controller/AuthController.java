package teamSviluppo.socialNetwork_BE.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import teamSviluppo.socialNetwork_BE.model.Token;
import teamSviluppo.socialNetwork_BE.model.Utente;
import teamSviluppo.socialNetwork_BE.payload.UtentePayloadLogin;
import teamSviluppo.socialNetwork_BE.service.inter.UtenteService;

import java.text.ParseException;

@CrossOrigin("*")
@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private UtenteService utenteService;

    @PostMapping("/login")
    public ResponseEntity<Token> login(@RequestBody UtentePayloadLogin up){

        if (up == null){
            return new ResponseEntity<>(new Token(null), HttpStatus.BAD_REQUEST);
        }



        Utente u = utenteService.getUtente(up.usernameOrEmail());

        if (u != null){
            return new ResponseEntity<>(new Token("il mio token"), HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>(new Token(null), HttpStatus.UNAUTHORIZED);
        }
    }

    @PostMapping("/register")
    public ResponseEntity<Token> register(@RequestBody Utente u) throws ParseException {
        utenteService.inserisciUtente(u);

        return new ResponseEntity<>(new Token("il mio token"), HttpStatus.OK);
    }
}
