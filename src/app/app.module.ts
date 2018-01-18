import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { JsonSchemaFormModule, Bootstrap3FrameworkModule } from 'angular2-json-schema-form';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule, Bootstrap3FrameworkModule, JsonSchemaFormModule.forRoot(Bootstrap3FrameworkModule)
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
