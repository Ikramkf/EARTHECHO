import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AirComponent } from './air/air.component';
import { TerreComponent } from './terre/terre.component';
import { EauComponent } from './eau/eau.component';

const routes: Routes = [
  {
    path: '',component: HomeComponent
  },
  {path:'air', component:AirComponent},
  {path:'terre', component:TerreComponent},
  {path:'eau', component:EauComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
