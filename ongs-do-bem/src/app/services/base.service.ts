import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from './../../environments/environment.prod';
import { catchError, map } from 'rxjs/operators';

export class BaseService<T> {

  protected api: string = environment.api;
  protected fullUrl: string;
  protected parameters: HttpParams;
  protected headers = new Headers({
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

  public addParameter(key: string, value: string): void {
    this.parameters = this.parameters.append(key, value);
  }

  public setToken(token: string): void {
    localStorage.setItem('authentication', token);
  }

  protected addOptions(parameters?: HttpParams): any {
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
}
