import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ToDoComponent } from './to-do/to-do.component';

import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';

import { TODOLISTS } from "./mockups/mock-todolist";

@NgModule({
  declarations: [
    AppComponent,
    ToDoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Angular2FontawesomeModule
  ],
  providers: [TODOLISTS],
  bootstrap: [AppComponent]
})
export class AppModule { }
