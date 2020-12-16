import { Component, OnInit, Inject, InjectionToken } from '@angular/core';
import { responseservice } from './response.services';


@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css']
})
export class ResponseComponent implements OnInit {
  ngOnInit() {

  }
  contact;
  constructor(myform:responseservice) {
    this.contact= myform.getData();
  }
  }