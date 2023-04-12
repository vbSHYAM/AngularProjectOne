import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { ListnewsComponent } from './news/containers/listnews/listnews.component';

const routes: Routes = [
  {path:"signin", component:SignInComponent},
  {path:"listnews" , component:ListnewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
