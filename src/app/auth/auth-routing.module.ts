import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntryComponent } from './entry/entry.component';
import { AuthComponent } from './auth.component';

const routes: Routes = [
  {path : '' , component : AuthComponent , children : [
    {path : '' , redirectTo : 'entry' , pathMatch : 'full'},
    {path : 'entry' , component : EntryComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
