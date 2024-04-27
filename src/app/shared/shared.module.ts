import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { JobCardComponent } from './components/job-card/job-card.component';
import { DateFormatPipe } from './pipes/date-format.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { AppModule } from '../app.module';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    NavbarComponent,
    JobCardComponent,
    DateFormatPipe,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule,
    HttpClientModule,
  ],
  exports: [
    NavbarComponent,
    JobCardComponent,
    DateFormatPipe,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule,
    HttpClientModule,
    LoaderComponent
  ],
  providers: []
})
export class SharedModule { }
