import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => {
    console.error(err)

    // TODO: 
    // 1. Apresentar um tela para usuário sinalizando a ocorrência de um erro genérico.
    // 2. Enviar a ocorrencia do erro e os detalhes sobre o erro para um backend a ser definido.
  });
