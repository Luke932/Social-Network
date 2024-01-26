import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PostService } from '../../services/post.service';
import { Post } from 'src/app/core/models/post.interface';
import { Utente } from 'src/app/core/models/utente.interface';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit{
private u:Utente= {
  id: "1",
  nome: "Luca",
  cognome: " Giacalone",
  username: "Luke",
  email: "luke@luke.it",
  password: "1234",
  dataNascita: new Date("12-12-12")
}
postFrom!: any;
  constructor(
    private fb: FormBuilder,
    private postService:PostService
    ){}
private post!:Post;
ngOnInit(): void {
  console.log("dsa");
  this.postFrom=this.createForm();
}
createForm(): any {
  return this.fb.group({
    titolo:['',[Validators.required]],
    pathImg:['',[Validators.required]],
    descrizione:['',[Validators.required]]
  })
}

submitPost() {
  this.post=this.postFrom.value;
  this.post.u=this.u;
  this.postService.addPost(this.post).subscribe((res)=>{
    console.log(res)
  })
}

}
