import { DetailsDialogComponent } from './../details-dialog/details-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import Case from 'src/app/models/case.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.css']
})
export class CaseComponent implements OnInit {
  @Input()
  cases: Case[] = [];

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  public viewDetails(details: Case):void  {
    this.dialog.open(DetailsDialogComponent, { data: details })
  }
}
