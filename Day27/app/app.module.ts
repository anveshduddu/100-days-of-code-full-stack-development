import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ RouterModule } from '@angular/router';
import { AppComponent } from './app.component';import { FormsModule } from '@angular/forms';
import { FeedbackFormComponent } from './Feedback-Form/Feedback-Form.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ResponseComponent } from './response/response.component';
import { responseservice } from './response/response.services';


@NgModule({
  declarations: [
    AppComponent,
    FeedbackFormComponent,
    NavBarComponent,
    ResponseComponent    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
     
      { path : 'response' , component : ResponseComponent},
      { path : 'feedback-form' , component : FeedbackFormComponent},
     
    ])
  ],
  providers: [responseservice,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
