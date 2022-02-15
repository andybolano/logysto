import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, first, retry } from 'rxjs/operators';
import { HttpCommonService } from './http-common.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralRequestService {

  constructor(
    private readonly http: HttpClient,
    private readonly httpCommon: HttpCommonService
    ) { }


  get<T>(url: string, options?:unknown): Observable<T>{
    return this.http.get<T>(url).
      pipe(
      retry(1),
      first(),
      catchError((error: HttpErrorResponse) => this.httpCommon.handleError<T>(error))
    );
  }
}
