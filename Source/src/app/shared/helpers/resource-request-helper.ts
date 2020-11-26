import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

export class ResourceRequestHelper<Req, Resp> {

  private _http: HttpClient;
  private _apiKey: string;
  private _baseUrl: string;
  private _resource: string;

  constructor(http: HttpClient, backend: any, resource: string) {
    this._http = http;
    this._apiKey = backend.apiKey;
    this._baseUrl = backend.baseUrl;
    this._resource = resource;
  }

  protected get http(): HttpClient {
    return this._http;
  }

  /**
   * Implementação do verbo DELETE
   * Exclusão de um registro com base no 'ID' do registro.
   * @param data 
   */
  delete(id: number | string): Observable<Resp> {
    return this._http.delete<Resp>(`${this._baseUrl}/${this._resource}/${id}`, this.getHttpOptions());
  }

  /**
   * Implementação do verbo GET.
   * Recuperação de registros com base nos fitros informados.
   * @param data 
   */
  private find(data?: Req) {
    const options = this.getHttpOptions();

    if (data) {
      Object.keys(data).forEach(key => {
        if (data[key] !== null && data[key] !== undefined) {
          options['params'] = options['params'].set(key, data[key]);
        }
      });
    }

    return this._http.get<Resp>(`${this._baseUrl}/${this._resource}`, options as Object);
  }

  /**
   * Implementação do verbo GET.
   * Recuperação de registros com base no 'ID' ou nos filtros informados.
   * @param data 
   * @param id 
   */
  get(id?: number | string, data?: Req): Observable<Resp> {

    if (id) {
      return this._http.get<Resp>(`${this._baseUrl}/${this._resource}/${id}`, this.getHttpOptions());
    }

    return this.find(data);
  }

  /**
   * Implementação do verbo POST.
   * Criação de um novo registro, o 'ID' NÃO deve ser submetido na requisição.
   * @param data 
   */
  post(data: Req): Observable<Resp> {
    return this._http.post<Resp>(`${this._baseUrl}/${this._resource}`, data, this.getHttpOptions());
  }

  /**
   * Implementação do verbo PATCH.
   * Atualização parcial do registro, o 'ID' DEVE ser submetido na requisição.
   * @param id 
   * @param data 
   */
  patch(id: number | string, data: Req): Observable<Resp> {
    return this._http.patch<Resp>(`${this._baseUrl}/${this._resource}/${id}`, data, this.getHttpOptions());
  }

  /**
   * Implementação do verbo PUT.
   * Atualização completa do registro, o 'ID' deve ser submetido na requisição.
   * @param data 
   */
  put(id: number | string, data: Req): Observable<Resp> {
    return this._http.put<Resp>(`${this._baseUrl}/${this._resource}/${id}`, data, this.getHttpOptions());
  }

  /**
   * Recupera os Options da requisição
   */
  private getHttpOptions(): Object {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    httpOptions['params'] = new HttpParams();
    httpOptions['params'] = httpOptions['params'].set('api_key', this._apiKey);

    return httpOptions;
  }

}
