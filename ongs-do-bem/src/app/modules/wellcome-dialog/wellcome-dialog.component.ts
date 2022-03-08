import { OngService } from './../../services/ong.service';
import { Router } from '@angular/router';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-wellcome-dialog',
  templateUrl: './wellcome-dialog.component.html',
  styleUrls: ['./wellcome-dialog.component.css']
})
export class WellcomeDialogComponent implements OnInit {
  
  
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: string,
    private router: Router,
    private dialog: MatDialogRef<WellcomeDialogComponent>,
    private service: OngService
  ) { }

  ngOnInit(): void {
  }

  public confirm() {
    this.service.login(this.data).subscribe(
      r => {
        this.service.setToken(r.Authentication);
        localStorage.setItem("userId", r.userId.toString());
        this.router.navigateByUrl('/');
      }
    )

    this.dialog.close();
  }
}
