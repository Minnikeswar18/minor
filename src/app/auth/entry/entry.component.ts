import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Store } from '@ngrx/store';
import { handleLogin, handleSignUp } from '../store/auth.actions';
import { Router } from '@angular/router';
import { errorSelector, loadingSelector, responseSelector } from '../store/auth.selectors';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent {

  isLoginActive: boolean;
  loginForm: FormGroup;
  signupForm: FormGroup;

  imgUrl1: string;
  imgUrl2: string;
  isLoading: boolean = false;

  constructor( private router: Router, private store: Store) {
    this.imgUrl1 = '../../assets/images/entry_page.png';
    this.imgUrl2 = '../../assets/images/signup_page.png';

    this.isLoading = false;
    this.isLoginActive = true;

    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', Validators.required)
    })

    this.signupForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required])
    })

    this.store.select(responseSelector).subscribe((response) => {
      if(!response) return;
      if(response?.responseFor === 'login') {
        localStorage.setItem('jwt', response.token);
        this.loginForm.reset();
        // this.router.navigate(['/home']);
      }
      else{
        this.signupForm.reset();
        this.toggleLogin();
      }
    })

    this.store.select(loadingSelector).subscribe((resp) => {
      this.isLoading = resp;
    })
  }

  toggleLogin() {
    setTimeout(() => {
      this.isLoginActive = !this.isLoginActive;
    }, 300);
  }

  signUp() {
    this.loginForm.reset();
    const payload = this.signupForm.value;
    this.store.dispatch(handleSignUp({ payload }));
  }

  login() {
    this.signupForm.reset();
    const payload = this.loginForm.value;
    this.store.dispatch(handleLogin({ payload }));
  }

}
