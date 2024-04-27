import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecruiterRoutingModule } from './recruiter-routing.module';
import { RecruiterComponent } from './recruiter.component';
import { SharedModule } from '../shared/shared.module';
import { ProfileListComponent } from './components/profile-list/profile-list.component';
import { TagComponent } from './components/tag/tag.component';
import { FormModalComponent } from './components/form-modal/form-modal.component';
import { JobModalComponent } from './components/job-modal/job-modal.component';
import { StoreModule } from '@ngrx/store';


@NgModule({
  declarations: [
    RecruiterComponent,
    ProfileListComponent,
    TagComponent,
    FormModalComponent,
    JobModalComponent
  ],
  imports: [
    CommonModule,
    RecruiterRoutingModule,
    SharedModule,
    StoreModule.forFeature('recruiter', {})
  ],
  exports: [
    SharedModule,
    ProfileListComponent,
    TagComponent,
    FormModalComponent,
    JobModalComponent
  ]
})
export class RecruiterModule { }
