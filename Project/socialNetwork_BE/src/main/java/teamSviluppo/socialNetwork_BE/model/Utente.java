package teamSviluppo.socialNetwork_BE.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.*;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.validation.annotation.Validated;

import java.util.Date;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "utenti")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@JsonIgnoreProperties()
public class Utente {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false)
    @NotBlank
    private String nome;

    @Column(nullable = false)
    @NotBlank
    private String cognome;

    @Column(name = "data_nascita", nullable = false)
    @NotBlank
    @DateTimeFormat(fallbackPatterns = "yyyy-MM-dd")
    private Date dataNascita;

    @Column(unique = true, nullable = false)
    @NotBlank
    private String username;

    @Column(unique = true,  nullable = false)
    @Email
    @NotBlank
    private String email;

    @Column(nullable = false)
    @NotBlank
    private String password;

    @OneToMany(mappedBy = "u")
    private Set<Post> posts;

    /*
    TODO (Da implementare i ruoli e in caso in aggiunta follower e seguiti)
    private String ruolo;

    private List<Utente> follower

    private List<Utente> seguiti
     */


}
