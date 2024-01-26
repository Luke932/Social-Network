package teamSviluppo.socialNetwork_BE.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import teamSviluppo.socialNetwork_BE.model.Token;
import teamSviluppo.socialNetwork_BE.model.Utente;
import teamSviluppo.socialNetwork_BE.repository.UtenteRepository;
import teamSviluppo.socialNetwork_BE.service.inter.UtenteService;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.format.DateTimeFormatter;
import java.util.Date;

@Service
public class UtenteServiceImpl implements UtenteService {
    @Autowired
    private UtenteRepository utenteRepository;

    @Override
    public void inserisciUtente(Utente u) throws ParseException {
        String pattern = "yyyy-MM-dd";
        SimpleDateFormat formatter = new SimpleDateFormat(pattern);
        Date formatted = formatter.parse(formatter.format(u.getDataNascita()));
        u.setDataNascita(formatted);
        //TODO(criptare la password)
        utenteRepository.save(u);
    }

    @Override
    public Utente getUtente(String usernameOrEmail) {
        if (usernameOrEmail.contains("@")) {
            return utenteRepository.findByEmail(usernameOrEmail).isPresent() ? utenteRepository.findByEmail(usernameOrEmail).get() : null;
        }
        else {
            return utenteRepository.findByUsername(usernameOrEmail).isPresent() ? utenteRepository.findByUsername(usernameOrEmail).get() : null;
        }
    }


}
