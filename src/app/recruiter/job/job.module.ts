import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobRoutingModule } from './job-routing.module';
import { RecruiterModule } from '../recruiter.module';
import { JobComponent } from './job.component';
import { JobsComponent } from './jobs/jobs.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    JobComponent,
    JobsComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    JobRoutingModule,
    RecruiterModule
  ],
  exports:[
  ]
})
export class JobModule { }
