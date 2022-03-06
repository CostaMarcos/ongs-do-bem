import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { Injectable } from '@angular/core';
import Ong from '../models/ong.model';

@Injectable({
  providedIn: 'root'
})
export class OngService extends BaseService<Ong>{

  constructor(protected http: HttpClient) { 
    super(http, "ong/");
  }

  public login(code: string) {
    this.http.post(this.fullUrl, { code: code }).subscribe(
      res => {
        console.log(res);
      }
    )
  }
}
