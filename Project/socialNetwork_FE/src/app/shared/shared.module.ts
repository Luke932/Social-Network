import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { materialModule } from './material.module';

import { PostsComponent } from './posts/posts.component';




@NgModule({
  declarations: [
    PostsComponent
  ],
  imports: [
    CommonModule,
    ...materialModule
  ],
  exports:[
    PostsComponent,
    ...materialModule
  ]
})
export class SharedModule { }
//componenti condivisi da più moduli