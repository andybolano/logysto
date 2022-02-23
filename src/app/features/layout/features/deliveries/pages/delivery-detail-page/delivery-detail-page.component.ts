import { delivery } from '@shared/mocks/delivery.mock';
import { Component, OnInit } from '@angular/core';
import { DeliveryDetail } from '@shared/types';
import { EndPoints } from '@shared/dictionaries';
import { catchError, finalize, map, tap } from 'rxjs/operators';
import { GenericResponse } from '@shared/types/interfaces/generic-response.interface';
import { GeneralRequestService } from '@lib/common-services/services/general-request';
import { Observable, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

const user: string = 'jorpcolombia@gmail.com';
const code: string = '11780767';
@Component({
  selector: 'app-delivery-detail-page',
  templateUrl: './delivery-detail-page.component.html',
  styleUrls: ['./delivery-detail-page.component.scss']
})
export class DeliveryDetailPageComponent implements OnInit {

  public deliveryDetail: DeliveryDetail;
  private loading: boolean;

  constructor(
    private readonly endPoints: EndPoints,
    protected readonly generalRequestService: GeneralRequestService
    ) {
      this.loading = false;
  }

  ngOnInit(): void {
    this.getDeliveryDetail();
  }

  private getDeliveryDetail(): void{
    this.loading = true;

   this.generalRequestService.get<GenericResponse<DeliveryDetail>>(this.endPoints.deliveries().getDetail(user, code))
   .pipe(
      map((response: GenericResponse<DeliveryDetail>) => response.response),
      finalize( (): boolean =>  this.loading = false  ),
      catchError( ( error: HttpErrorResponse ): Observable<never> => this.error( error ))
     )
    .subscribe({
      next: (response: DeliveryDetail) => this.resolveDetail(response)
    });
  }

  private resolveDetail(deliveryDetail: DeliveryDetail){
    this.deliveryDetail = deliveryDetail;
  }

  private error( error: HttpErrorResponse ): Observable<never> {
    alert(JSON.stringify(error));
    return throwError( error );
  }

}
