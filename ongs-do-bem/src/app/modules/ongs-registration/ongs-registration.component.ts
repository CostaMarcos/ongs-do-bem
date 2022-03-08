import { WellcomeDialogComponent } from './../wellcome-dialog/wellcome-dialog.component';
import { Router } from '@angular/router';
import { OngService } from './../../services/ong.service';
import { Component, OnInit } from '@angular/core';
import Ong from 'src/app/models/ong.model';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-ongs-registration',
  templateUrl: './ongs-registration.component.html',
  styleUrls: ['./ongs-registration.component.css']
})
export class OngsRegistrationComponent implements OnInit {

  constructor(
    private service: OngService, 
    private router: Router,
    private dialog: MatDialog
    ) { }

  ngOnInit(): void {
  }

  public create(name: string, email: string, phone: string, city: string, region: string) {
    this.service.register(name, email, phone, city, region).subscribe(res => {
      
      this.dialog.open(WellcomeDialogComponent, { data: res.code });

    }, (error) => {

    })
  }
}
