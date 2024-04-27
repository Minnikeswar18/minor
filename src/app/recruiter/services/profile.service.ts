import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http : HttpClient) { }

  getMatchingProfiles(jobId : string) : Observable<any>{
    const headers = new HttpHeaders({'Authorization' : 'Bearer ' + localStorage.getItem('jwt')});
    return this.http.get('http://localhost:8000/home/similarProfiles/' + jobId , {headers : headers});
  }
}
