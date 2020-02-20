import { Injectable } from '@angular/core';
import { Drone } from '../model/Drone.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { catchError } from 'rxjs/operators';
import { throwError, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DroneServiceService {

  droneServiceSubject = new Subject<Drone>();
  baseUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  getDrone(): Observable<Drone[]> {
    return this.http.get<Drone[]>(this.baseUrl + 'drones')
      .pipe(
        catchError((error) => this.handleError(error))
      );
  }

  private handleError(error: HttpErrorResponse) {
    console.log('UserWebService error', error);

    return throwError('Something bad happened; please try again later.');
  }
}
