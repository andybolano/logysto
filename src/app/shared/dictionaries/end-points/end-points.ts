import { environment } from '@env';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EndPoints {
  private readonly logystoApi: string;

  constructor() {
    this.logystoApi = environment.logystoApi;
  }


  public deliveries() {
    return {
      getDetail: (user:string, code:string): string =>
        `${this.logystoApi}Delivery/SearchTraceability/${user}/${code}`
    };
  }
}
