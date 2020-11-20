import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ApplicationHttpInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const dupReq = req.clone({
            // Adicionar headers comuns à todas as requisições
            // headers: req.headers.append('Content-Type', 'application/json')
        });

        return next.handle(dupReq || req).pipe(catchError(this.handleError()));
    }

    /**
     * Trata as requisições HTTP que falham
     */
    private handleError() {
        return (error: any): Observable<any> => {

            // TODO: Enviar o log de erro para os servidores do Olá
            console.error(error);

            // Mostra mensagem na tela
            this.showErrorMessage(error);

            // O aplicativo continua em execução e retorna um resultado vazio
            return {} as any;
        };
    }

    private showErrorMessage(error: any): void {
        // TODO: Aguardando definição da equipe de designers
    }

}

@NgModule({
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ApplicationHttpInterceptor,
            multi: true
        }
    ]
})
export class Interceptor { }
