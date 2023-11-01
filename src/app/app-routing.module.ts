import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { InfoComponent } from './info/info.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
    {path:"register",component:RegisterComponent},
    {path:"info",component:InfoComponent},
    {path:"home",component:HomeComponent},
  ]

  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
