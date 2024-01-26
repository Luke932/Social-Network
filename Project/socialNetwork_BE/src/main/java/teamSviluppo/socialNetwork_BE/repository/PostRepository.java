package teamSviluppo.socialNetwork_BE.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import teamSviluppo.socialNetwork_BE.model.Post;

@Repository
public interface PostRepository extends JpaRepository<Post, Integer> {

}
