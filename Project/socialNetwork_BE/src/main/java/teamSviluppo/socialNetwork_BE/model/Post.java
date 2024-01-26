package teamSviluppo.socialNetwork_BE.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.*;

import java.util.Date;

@Entity
@Table(name = "post")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_post")
    private int idPost;

    @Column(nullable = false)
    @NotBlank
    private String titolo;

    @Column(name = "path_img")
    private String pathImg;

    @Column(nullable = false)
    @NotBlank
    private String descrizione;

    @Column(name = "data_post", nullable = false)
    @NotBlank
    private Date dataPost;

    @ManyToOne
    @JoinColumn(name = "id", nullable = false)
    private Utente u;

    /*
    TODO(da implementare in futuro il numero dei like e i commenti(entità nuova))
    private long nLike;

    private List<Commento> commenti;

     */
}
