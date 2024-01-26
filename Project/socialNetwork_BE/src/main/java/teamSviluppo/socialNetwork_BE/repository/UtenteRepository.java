package teamSviluppo.socialNetwork_BE.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import teamSviluppo.socialNetwork_BE.model.Utente;

import java.util.Optional;

@Repository
public interface UtenteRepository extends JpaRepository<Utente, Integer> {
    public Optional<Utente> findByEmail(String email);

    public Optional<Utente> findByUsername(String username);

}
