import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EndPoints {
  private readonly logystoApi: string;

  constructor(@Inject('env') private readonly env: { [key: string]: string }) {
    this.logystoApi = this.env.logystoApi;
  }


  public deliveries() {
    return {
      getList: (queryFilter: URLSearchParams): string =>
        `${
          this.logystoApi
        }deliveries?${queryFilter.toString()}`
    };
  }


}
