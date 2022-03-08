import { CaseService } from './../../services/case.service';
import { Component, OnInit, Input } from '@angular/core';
import Case from 'src/app/models/case.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  @Input() cases: Case[] = [];
  constructor(private service: CaseService) { }

  ngOnInit(): void {
  }

  deleteCase(id: number) {
    var newList: Case[] = [];

    this.service.removeById(id).subscribe(() => {
      this.cases.forEach(e => {
        
        if(e.id != id) {
          newList.push(e);
        }
      })

      this.cases = newList;
    })
  }
}
