import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutoComponent } from './auto/auto.component';
import { IdShowDirective } from './auto/id-show.directive';
import { PricePipe } from './auto/price.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AutoComponent,
    IdShowDirective,
    PricePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
