import { Router } from '@angular/router';
import { CaseService } from './../../services/case.service';
import { Component, OnInit } from '@angular/core';
import Case from 'src/app/models/case.model';

@Component({
  selector: 'app-case-registration',
  templateUrl: './case-registration.component.html',
  styleUrls: ['./case-registration.component.css', 
  '../ongs-registration/ongs-registration.component.css']
})
export class CaseRegistrationComponent implements OnInit {

  constructor(private service: CaseService, private router: Router) { }

  ngOnInit(): void {
  }


  public registerCase(title: string, description: string, value: string) {
    this.service.registerCase(title, description, value).subscribe(() => {
      this.router.navigateByUrl('/');
    });
  }
}
