import { NgModule, Optional, SkipSelf } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from './services/auth.service';
import { materialModule } from './../shared/material.module';
import { ConfigService } from './services/config.service';
import { HttpClientModule } from '@angular/common/http';
import {
  AppConfigGetter,
  AppConfigInitializer,
  AppConfigLoader,
} from './loaders/app-config.loader';

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, RouterModule, HttpClientModule, ...materialModule],
  exports: [NavbarComponent],
})
export class CoreModule {
  public static forRoot() {
    return {
      ngModule: CoreModule,
      providers: [
        AuthService,
        ConfigService,
        AppConfigLoader,
        AppConfigGetter,
        AppConfigInitializer,
      ],
    };
  }
  public static forChild() {
    return {
      ngModule: CoreModule,
    };
  }
  public static forTest() {
    return {
      ngModule: CoreModule,
      providers: [],
    };
  }

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded');
    }
  }
}
