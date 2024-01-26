import { Component } from '@angular/core';
import { ThemeEnum } from 'src/app/shared/enums/theme.enum';
import { ConfigService } from '../../services/config.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
themeEnum = ThemeEnum;


constructor(public configService: ConfigService, public authSrv: AuthService){}

}
