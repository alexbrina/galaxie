import { MediaMatcher } from '@angular/cdk/layout';
import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatRadioChange } from '@angular/material/radio';
import { MatSidenav } from '@angular/material/sidenav';
import { AppConfig } from '../../../../app.config';
import { ThemeEngineHelper } from '../../../../shared/helpers/theme-engine-helper';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit, AfterViewInit {

  @ViewChild(MatSidenav) matSidenav: MatSidenav;

  public mobileQuery: MediaQueryList;

  form: FormGroup;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private media: MediaMatcher,
    private themeEngine: ThemeEngineHelper) {
    this.mobileQuery = this.media.matchMedia('(max-width: 768px)');
    this.mobileQuery.addListener(() => this.changeDetectorRef.detectChanges());
  }

  ngOnInit(): void {
    this.createForm();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.themeEngine.setGlobalTheme(AppConfig.DEFAULT_THEME);
      this.form.get('colorTheme').setValue(AppConfig.DEFAULT_THEME);
    });
  }

  private createForm() {
    this.form = new FormGroup({
      colorTheme: new FormControl()
    });
  }

  themeChange($event: MatRadioChange) {
    this.themeEngine.setGlobalTheme($event.value);
  }

}
