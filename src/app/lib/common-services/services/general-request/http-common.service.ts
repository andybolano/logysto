import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,  throwError } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class HttpCommonService {

  constructor(

  ) { }

  handleError<T>(error: HttpErrorResponse): Observable<T> {
    alert(JSON.stringify(error))
    return throwError(error);
  }


}
