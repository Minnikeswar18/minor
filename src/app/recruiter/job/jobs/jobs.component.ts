import { AfterViewInit, Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MessageService } from 'primeng/api';
import { JobService } from '../../services/job.service'
import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {

  selectedJob: any = {};
  jobs: any = [];
  allJobs: any = [];
  searchText: string = '';
  sortTypes: string[] = ['Date latest', 'Date oldest', 'Role ascending', 'Role descending'];
  selectedSort: string = 'Date latest';
  showModal: boolean = false;
  showAddJobModal: boolean = false;

  constructor(private jobService: JobService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.jobService.getAllJobs().subscribe((res) => {
      this.jobs = res;
      this.allJobs = res;
      this.sortJobs();
    });
  }

  viewJob(job: any): void {
    this.selectedJob = job;
    this.showModal = true;
  }

  closeJobModal() {
    this.showModal = false;
  }

  deleteJob(job: any) {
    this.jobService.deleteJob(job._id).subscribe((res) => {
      if (res.page !== 'JOBS') return;
      if (res.status === 400) {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: res.error });
        return;
      }
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Job deleted successfully' });
      this.jobs = this.jobs.filter((j: any) => {
        return j._id !== job._id;
      });
    });
  }

  setSortType(sortType: string) {
    this.selectedSort = sortType;
    this.sortJobs();
  }

  sortJobs() {
    if (this.selectedSort === 'Date latest') {
      this.jobs.sort((a: any, b: any) => {
        return new Date(b.datePosted).getTime() - new Date(a.datePosted).getTime();
      });
    }
    else if (this.selectedSort === 'Date oldest') {
      this.jobs.sort((a: any, b: any) => {
        return new Date(a.datePosted).getTime() - new Date(b.datePosted).getTime();
      });
    }
    else if (this.selectedSort === 'Role ascending') {
      this.jobs.sort((a: any, b: any) => {
        return a.jobTitle.localeCompare(b.jobTitle);
      });
    }
    else if (this.selectedSort === 'Role descending') {
      this.jobs.sort((a: any, b: any) => {
        return b.jobTitle.localeCompare(a.jobTitle);
      });
    }
  }

  filterJobs() {
    this.jobs = this.allJobs.filter((job: any) => {
      return job.jobTitle.toLowerCase().includes(this.searchText.toLowerCase());
    });
  }

  handleCloseAddJobModal() {
    this.showAddJobModal = false;
  }

  handleShowAddJobModal() {
    this.showAddJobModal = true;
  }

  handleAddJob(job: any) {
    console.log(job);
  }

}
