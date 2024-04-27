import { Component, ElementRef, OnChanges } from '@angular/core';
import { Input , Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-job-modal',
  templateUrl: './job-modal.component.html',
  styleUrls: ['./job-modal.component.scss']
})
export class JobModalComponent{
  @Input() selectedJob: any = {};
  @Input() showModal: boolean = false;
  @Output() closeModal = new EventEmitter<void>();

  closeJobModal() {
    this.closeModal.emit();
  }

  getHeight(element: HTMLElement): string {
    return element.scrollHeight + 'px';
  }
}
