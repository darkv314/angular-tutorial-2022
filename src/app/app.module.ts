import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutoComponent } from './auto/auto.component';
import { PricePipe } from './auto/price.pipe';
import { HttpClientModule } from '@angular/common/http';
import { HoverDirective } from './auto/hover.directive';


@NgModule({
  declarations: [
    AppComponent,
    AutoComponent,
    PricePipe,
    HoverDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
