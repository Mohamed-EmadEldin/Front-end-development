import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentComponent } from './Student/Student.component';
import { DepartementComponent } from './departement/departement.component';

@NgModule({
  declarations: [
    AppComponent,StudentComponent, DepartementComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
