import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from './../../environments/environment.prod';
import { catchError, map } from 'rxjs/operators';

export class BaseService<T> {

  protected api: string = environment.api;
  protected fullUrl: string;
  protected parameters: HttpParams;
  protected headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Content-Language': 'pt-br',
    'Accept-Language': 'pt-br',
  });

  constructor(protected http: HttpClient, path: string) { 
    this.fullUrl = this.api.concat(path);
    this.parameters = new HttpParams();
  }

  public getToken(): string {
    return localStorage.getItem('authentication') || "";
  }

  public clearParameters(): void {
    this.parameters = new HttpParams();
  }

  public addParameter(key: string, value: string): void {
    this.parameters = this.parameters.append(key, value);
  }

  public setToken(token: string): void {
    localStorage.setItem('authentication', token);
  }

  public removeToken(): void {
    localStorage.removeItem('authentication');
    localStorage.removeItem('userId');
  }

  protected addOptions(parameters?: HttpParams): any {

    this.headers = this.headers.set('Authorization', this.getToken())

    if(parameters !== null && parameters !== undefined) {
      return {
        responseType: 'json',
        observe: 'body',
        headers: this.headers,
        params: parameters
      }
    } else {
      return {
        responseType: 'json',
        observe: 'body',
        headers: this.headers,
        params: null
      }
    }
  }

  public getAll(): Observable<T[]> {
    return this.http.get(this.fullUrl, this.addOptions(this.parameters)).pipe(
      map((response: Object) => response as T[]),
      catchError(ex => throwError(ex))
    );
  }

  public removeById(id: number): any {
    return this.http.delete(
      this.fullUrl.concat(String(id) + '/'), 
      this.addOptions(this.parameters)).pipe(
        map(_ => {
        }),
        catchError(ex => throwError(ex)));
  }

  public create(data: T): any {
    return this.http.post(this.fullUrl, data, this.addOptions(this.parameters));
  }
}
