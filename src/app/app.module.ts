import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { GreetDemoComponent } from './greet-demo/greet-demo.component';
import { ComputeDemoComponent } from './compute-demo/compute-demo.component';
import { CurrenciesDemoComponent } from './currencies-demo/currencies-demo.component';


@NgModule({
  declarations: [
    AppComponent,
    GreetDemoComponent,
    ComputeDemoComponent,
    CurrenciesDemoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
