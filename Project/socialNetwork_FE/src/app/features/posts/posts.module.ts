import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { PostPageRoutingModule } from './posts.routing.module';



@NgModule({
  declarations: [
    PostsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    PostPageRoutingModule
  ]
})
export class PostsModule { }
