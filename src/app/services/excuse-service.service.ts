import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExcuseService {

  constructor(private http: HttpClient) { }

  getExcuse(category:string): Observable<any>{
    return this.http.get(`https://excuser.herokuapp.com/v1/excuse/${category}`);
  }
}
