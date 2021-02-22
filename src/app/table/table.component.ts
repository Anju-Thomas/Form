import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,} from '@angular/forms';
import { DetailService } from '../detail.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private detailservice:DetailService) { }
data:any=[]
  ngOnInit(): void {
    this.detailservice.inputdata$
    .subscribe(
      inputs=>{
        this.data.push(inputs)
      }
    )
  }

}
