package teamSviluppo.socialNetwork_BE.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import teamSviluppo.socialNetwork_BE.repository.UtenteRepository;
import teamSviluppo.socialNetwork_BE.service.inter.UtenteService;

@Service
public class UtenteServiceImpl implements UtenteService {
    @Autowired
    private UtenteRepository utenteRepository;

}
