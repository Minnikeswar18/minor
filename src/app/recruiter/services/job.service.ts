import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, catchError, finalize, map, of, tap } from 'rxjs';
// import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http : HttpClient ) { }

  getAllJobs() : Observable<any> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('jwt'));
    // this.authService.setLoading(true);
    return this.http.get('http://localhost:8000/job/myjobs' , {headers : headers}).pipe(
      // finalize(() => {this.authService.setLoading(false)}),
    )
  }

  deleteJob(jobId : string) : Observable<any> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('jwt'));
    // return this.http.delete('http://localhost:8000/job/delete/' + jobId, {headers : headers}).pipe(
    //   tap((res) => {
    //     console.log(res);
    //   })
    // )
    return new Observable((observer) => {
      observer.error({error : 'Job deleted successfully'});
    }).pipe(
      map((res) => {
        return {page : 'JOBS' , status : 200};
      }),
      catchError((err) => {
        return of({page : 'JOBS' , status : 400 , error : err.error ?? 'Error deleting job'});
      })
    )
  }
}
