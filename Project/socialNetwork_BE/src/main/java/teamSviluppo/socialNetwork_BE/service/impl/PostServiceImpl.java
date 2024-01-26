package teamSviluppo.socialNetwork_BE.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import teamSviluppo.socialNetwork_BE.repository.PostRepository;
import teamSviluppo.socialNetwork_BE.service.inter.PostService;

@Service
public class PostServiceImpl implements PostService {
    @Autowired
    private PostRepository postRepository;

}
