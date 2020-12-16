import { Component, OnInit } from '@angular/core';
import { responseservice } from '../response/response.services';



@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css']
})
export class FeedbackFormComponent {
 arr;


 constructor(private responseservicse: responseservice) {

 }
 
 log(x){ 

 }
 c1(x){
   this.responseservicse.putData(x);
 }
}