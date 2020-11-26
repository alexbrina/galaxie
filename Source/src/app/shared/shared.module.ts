import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { Interceptor } from '../internal/application-http-interceptor';
import { i18nLoaderFactory } from '../internal/i18n-loader-factory';
import { MaterialModule } from './material.module';

@NgModule({
    declarations: [],
    imports: [
        Interceptor,
        FlexLayoutModule,
        FormsModule,
        HttpClientModule,
        MaterialModule,
        ReactiveFormsModule,
        TranslateModule.forChild({
            loader: {
                provide: TranslateLoader,
                useFactory: i18nLoaderFactory,
                deps: [HttpClient]
            },
            isolate: false
        })
    ],
    exports: [
        FlexLayoutModule,
        FormsModule,
        HttpClientModule,
        MaterialModule,
        ReactiveFormsModule,
        TranslateModule
    ]
})
export class SharedModule {

    static forRoot(): ModuleWithProviders<SharedModule> {
        return {
            ngModule: SharedModule
        }
    }

}