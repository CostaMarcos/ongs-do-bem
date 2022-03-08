import { CaseService } from './../../services/case.service';
import { Component, OnInit } from '@angular/core';
import Case from 'src/app/models/case.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public userLogged: boolean = false;
  public cases: Case[] = [];
  
  constructor(private service: CaseService) { }

  ngOnInit(): void {
    this.service.clearParameters();
    if(this.service.getToken() !== ""){
      this.userLogged = true;
      this.service.addParameter('ong_id', localStorage.getItem('userId') || "");
    }
    this.service.getAll().subscribe(
      r => { this.cases = r }
    );
  }

  public logout() {
    this.service.removeToken();
  }

}
