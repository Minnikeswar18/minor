import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { map, tap } from 'rxjs';
import { JobService } from '../../services/job.service';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent{
  matchingProfiles : any = [];
  jobSelectionForm : FormGroup;
  jobs : any = [];
  constructor(private profileService : ProfileService , private jobService : JobService){
    this.jobSelectionForm = new FormGroup({
      selectedJob : new FormControl('not-selected')
    });

    this.jobService.getAllJobs().pipe(
      map((data) => {
        return data.map((job : any) => {
          return {
            id : job._id,
            companyName : job.companyName,
            jobTitle : job.jobTitle,
          }
        })
      })
    )
    .subscribe((data) => {
      this.jobs = data;
    });

    this.jobSelectionForm.valueChanges.subscribe((value) => {
      if(value.selectedJob === 'not-selected') return;
      this.profileService.getMatchingProfiles(value.selectedJob).subscribe((data) => {
        this.matchingProfiles = data;
      });
    });
  }
}
