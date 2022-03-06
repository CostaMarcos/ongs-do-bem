import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { Injectable } from '@angular/core';
import Case from '../models/case.model';

@Injectable({
  providedIn: 'root'
})
export class CaseService extends BaseService<Case> {

  constructor(protected http: HttpClient) { 
    super(http, "case/")
  }
}
