import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { appRoutingProviders, routing } from './app.routing';

import { AppComponent } from './app.component';
import { BridgeComponent } from './bridge/bridge.component';
import { AttitudeComponent } from './attitude/attitude.component';
import { BearingComponent } from './bearing/bearing.component';
import { ManouvreComponent } from './manouvre/manouvre.component';

@NgModule({
  declarations: [
    AppComponent,
    BridgeComponent,
    AttitudeComponent,
    BearingComponent,
    ManouvreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
