import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { EntryComponent } from './entry/entry.component';
import { Store, StoreModule } from '@ngrx/store';
import { errorReducer, loadingReducer, responseReducer } from './store/auth.reducers';
import { AppModule } from '../app.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AuthComponent } from './auth.component';
import { MessageService } from 'primeng/api';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './store/auth.effects';
import { ToastModule } from 'primeng/toast';
// import { MessageService } from 'primeng/api';


@NgModule({
  declarations: [
    EntryComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    StoreModule.forFeature('auth', {loading : loadingReducer , error : errorReducer , response : responseReducer}),
    EffectsModule.forFeature([AuthEffects]),
  ],
  providers:[]
})
export class AuthModule { }
