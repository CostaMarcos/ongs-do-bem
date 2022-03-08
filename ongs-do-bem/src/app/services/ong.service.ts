import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { Injectable } from '@angular/core';
import Ong from '../models/ong.model';
import Authentication from '../models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class OngService extends BaseService<Ong>{

  constructor(protected http: HttpClient) { 
    super(http, "ong/");
  }

  public login(code: string): Observable<Authentication>{
    return this.http.post<Authentication>(this.fullUrl.concat('login/'), { code: code });
  }

  public register(name: string, email: string, phone: string, city: string, region: string): Observable<Ong> {
    return this.http.post<Ong>(this.fullUrl, {
      name: name,
      email: email,
      number: phone,
      city: city,
      region: region
    });
  }
}
