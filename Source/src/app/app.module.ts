import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { customMatPaginatorIntl } from './internal/custom-mat-paginator';
import { i18nLoaderFactory } from './internal/i18n-loader-factory';
import { FooterComponent } from './layouts/main/components/footer/footer.component';
import { HeaderComponent } from './layouts/main/components/header/header.component';
import { SidenavListComponent } from './layouts/main/components/sidenav/components/sidenav-list/sidenav-list.component';
import { SidenavComponent } from './layouts/main/components/sidenav/sidenav.component';
import { MainLayoutComponent } from './layouts/main/main-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    SidenavListComponent,
    MainLayoutComponent,
    HomeComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: i18nLoaderFactory,
        deps: [HttpClient]
      },
      isolate: false
    })
  ],
  providers: [
    { provide: MatPaginatorIntl, useValue: customMatPaginatorIntl() }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
