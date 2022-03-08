import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { Injectable } from '@angular/core';
import Case from '../models/case.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CaseService extends BaseService<Case> {

  constructor(protected http: HttpClient) { 
    super(http, "case/")
  }

  public registerCase(title: string, description: string, value: string): any {
    return this.http.post(this.fullUrl, { 
      title: title,
      description: description,
      value: value
    }, this.addOptions(this.parameters));
  }
}
