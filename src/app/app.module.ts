import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Parte2Component } from './parte2/parte2.component';
import {MatCardModule} from '@angular/material/card';
import { Parte1Component } from './parte1/parte1.component';
import { SharedModule } from './shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [
    AppComponent,
    Parte2Component,
    Parte1Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    SharedModule,
    MatDividerModule,
    MatTableModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule
    
  ],
  exports: [
    MatCardModule,
    MatIconModule,
    SharedModule,
    MatDividerModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
