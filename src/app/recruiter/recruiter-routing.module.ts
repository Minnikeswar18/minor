import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecruiterComponent } from './recruiter.component';

const routes: Routes = [
  { path : '' , component : RecruiterComponent , children : [
    {path : '' , redirectTo : 'job' , pathMatch : 'full'},
    {path : 'job' , loadChildren : () => import('./job/job.module').then(m => m.JobModule)},
    // {path : 'profile' , loadChildren : () => import('./profile/profile.module').then(m => m.ProfileModule)}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecruiterRoutingModule { }
