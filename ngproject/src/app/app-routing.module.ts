import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationComponent } from './location/location.component';
import { CreatelocationComponent } from './createlocation/createlocation.component';
<<<<<<< HEAD

const routes: Routes = [
  {path:"location", component:LocationComponent},
  {path:"createlocation", component:CreatelocationComponent}
=======
import { UpdateLocationComponent } from './update-location/update-location.component';

const routes: Routes = [
  {path:"location", component:LocationComponent},
  {path:"createlocation", component:CreatelocationComponent},
  {path:'updateLocation/:id', component:UpdateLocationComponent}
 
>>>>>>> 16299edc7024596c25e0e17217cf58e0de6aacc9
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
