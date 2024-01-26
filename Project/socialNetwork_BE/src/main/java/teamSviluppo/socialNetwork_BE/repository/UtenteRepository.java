package teamSviluppo.socialNetwork_BE.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import teamSviluppo.socialNetwork_BE.model.Utente;

@Repository
public interface UtenteRepository extends JpaRepository<Utente, Integer> {


}
