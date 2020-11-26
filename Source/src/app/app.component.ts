import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { takeUntilDestroy } from './internal/take-until-destroy';
import { ThemeEngineHelper } from './shared/helpers/theme-engine-helper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  globalTheme: string;

  constructor(public translate: TranslateService,
    private themeEngine: ThemeEngineHelper) {

    translate.addLangs(['pt-br', 'en', 'es']);
    translate.setDefaultLang('pt-br');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/pt-br|en|es/) ? browserLang : 'pt-br');
  }

  ngOnInit() {
    this.themeEngine.globalThemeObservable
      .pipe(takeUntilDestroy(this))
      .subscribe(theme => {
        this.globalTheme = theme;
      });
  }

  ngOnDestroy(): void {
  }

}
