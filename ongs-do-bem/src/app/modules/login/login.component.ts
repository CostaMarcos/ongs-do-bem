import { OngService } from './../../services/ong.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginError: boolean = false;

  constructor(private service: OngService, private router: Router) { }

  ngOnInit(): void {
    if(this.service.getToken() !== "") {
      this.router.navigateByUrl('')
    }
  }

  public logon(id: any) {
    this.service.login(id).subscribe(r => {
      if(r.Authentication !== ""){
        this.service.setToken(r.Authentication);
        localStorage.setItem('userId', r.userId.toString());

        this.router.navigateByUrl('/')
      }
    }, (error) => {
      this.loginError = true;
    });
    //QXPQRLWE
  }
}
