import { Injectable } from '@angular/core';
import { ThemeEnum } from 'src/app/shared/enums/theme.enum';

@Injectable()
export class ConfigService {
  public theme: ThemeEnum = ThemeEnum.Dark;

  public setTheme() {
    this.theme = this.theme === ThemeEnum.Dark ? ThemeEnum.Light : ThemeEnum.Dark;
  }
}
