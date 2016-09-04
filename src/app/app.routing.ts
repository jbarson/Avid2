import { Router, RouterModule } from '@angular/router';
import { BridgeComponent } from './bridge/bridge.component';   
import { AttitudeComponent } from './attitude/attitude.component';
import { BearingComponent } from './bearing/bearing.component';
import { ManouvreComponent } from './manouvre/manouvre.component';


const appRoutes: Routes = [
  { path: 'bridge', component: BridgeComponent },
  { path: 'attitude', component: AttitudeComponent},
  { path: 'bearing', component: BearingComponent },
  { path: 'manouvre', component: ManouvreComponent },
  
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);