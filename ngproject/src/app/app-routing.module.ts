import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationComponent } from './location/location.component';
import { CreatelocationComponent } from './createlocation/createlocation.component';
import { UpdateLocationComponent } from './update-location/update-location.component';

const routes: Routes = [
  {path:"location", component:LocationComponent},
  {path:"createlocation", component:CreatelocationComponent},
  {path:'updateLocation/:id', component:UpdateLocationComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
