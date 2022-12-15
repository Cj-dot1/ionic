import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Items1Component } from './items/items1/items1.component';
import { Items2Component } from './items/items2/items2.component';
import { Items3Component } from './items/items3/items3.component';


@NgModule({
  declarations: [AppComponent, Items1Component, Items2Component, Items3Component],
  entryComponents: [Items1Component, Items2Component, Items3Component],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
