import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobComponent } from './job.component';
import { JobsComponent } from './jobs/jobs.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '' , component: JobComponent , children: [
    {path: '' , redirectTo: 'myjobs' , pathMatch: 'full'},
    {path: 'myjobs' , component : JobsComponent},
    {path: 'home' , component : HomeComponent},
  
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobRoutingModule { }
