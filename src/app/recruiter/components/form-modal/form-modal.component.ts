import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss']
})
export class FormModalComponent implements OnInit , OnChanges {
  @Input() showModal: boolean = false;
  @Output() closeModal : EventEmitter<null> = new EventEmitter<null>();
  @Output() addJob : EventEmitter<any> = new EventEmitter<any>();
  addJobForm : FormGroup = new FormGroup({});

  constructor(){
   
  }

  intializeForm() : void{
    this.addJobForm = new FormGroup({
      companyName : new FormControl('' , Validators.required),
      jobDescription : new FormControl('' , Validators.required),
      jobMode : new FormControl('Work from Office'  , Validators.required),
      jobSalary : new FormControl('' , Validators.required),
      salaryType : new FormControl('Hourly rate (/hr)'  , Validators.required),
      jobScope : new FormControl('Small' , Validators.required),
      jobExperience : new FormControl('Fresher (0-2 years)'  , Validators.required),
      jobSkills: new FormControl<string[] | null>([]),
      jobTitle: new FormControl('' , Validators.required),
      jobType: new FormControl('Part Time'  , Validators.required),
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['showModal'].currentValue !== changes['showModal'].previousValue){
      this.intializeForm();
    }
  }

  ngOnInit(): void {
    this.intializeForm();
  }
  
  handleClose(){
    this.intializeForm();
    this.closeModal.emit();
  }

  handleSubmit(){
    this.addJob.emit(this.addJobForm.value);
  }

}
