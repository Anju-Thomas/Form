import { Injectable } from '@angular/core';
import {Subject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DetailService {
  private forms=new Subject<any>();
  inputdata$=this.forms.asObservable();
  constructor() { }
  displaytable(inputs:any){
    this.forms.next(inputs)
  }
}

