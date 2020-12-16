import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world';
  welcome= [1,2];
  location;
  isActive;
  isActive1;
  onClick()
  {
    this.isActive=true;
    this.isActive1=false;
    this.location="map";
    console.log("button is clicked");
  }
  onClick1()
{
  this.isActive=false;
  this.isActive1=true;
  this.location="list"
  console.log("button is clicked");
}
}
