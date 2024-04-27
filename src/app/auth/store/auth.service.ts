import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Store } from '@ngrx/store';
import { setLoading } from './auth.actions';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private store: Store<{ loading: boolean }>) {

  }

  setLoading(loading: boolean) {
    this.store.dispatch(setLoading({ loading }));
  }

  login(payload: any): Observable<any> {
    return this.http.post('http://localhost:8000/auth/login', payload)
  }

  register(payload: any): Observable<any> {
    return this.http.post('http://localhost:8000/auth/register', payload);
  }

  /**
   * 
   * @param token 
   * @returns response from the server containing the deparsed jwt token, incase of error, it returns an object containing 404 status code
   */
  verifyJwt(token: string) {
    return this.http.post('http://localhost:8000/auth/verifyjwt', { jwt: token }).pipe(
      catchError((err: any) => {
        localStorage.removeItem('jwt');
        return of({ status: 404 });
      }),
    )
  }
}
