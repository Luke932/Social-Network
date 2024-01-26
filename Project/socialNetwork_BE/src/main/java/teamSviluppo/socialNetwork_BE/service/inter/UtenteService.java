package teamSviluppo.socialNetwork_BE.service.inter;

import teamSviluppo.socialNetwork_BE.model.Utente;
import teamSviluppo.socialNetwork_BE.repository.UtenteRepository;

import java.text.ParseException;

public interface UtenteService {

    public void inserisciUtente(Utente u) throws ParseException;

    public Utente getUtente(String usernameOrEmail);
}
