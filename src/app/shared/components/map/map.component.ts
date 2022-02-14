import { Location } from '@shared/types/interfaces/location.interface';
import { environment } from '@env';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


interface Position  {
  lat:number,
  lng: number
}
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {


  @Input() public locations: Location[];
  public apiLoaded: Observable<boolean>;
  public center: google.maps.LatLngLiteral;
  public zoom:number = 13;
  public markerPositions: google.maps.LatLngLiteral[] = [];
  public markerOptions: google.maps.MarkerOptions = {
    draggable: false,
    icon: '../assets/images/pin.png'
  };

  constructor(
    httpClient: HttpClient
    ) {
    this.apiLoaded = httpClient.jsonp(`${environment.urlGoogleMap}${environment.apiKey}`, 'callback')
        .pipe(
          map(() => true),
          catchError(() => of(false))
        );
  }

  ngOnInit(): void {
     this.setValues();
  }

  private setValues(): void{
    this.center = this.setCenterPosition(this.locations);
    this.markerPositions = this.loadLocations();
  }

  private loadLocations(): Array<Position> {
    return this.locations.map((location:Location)=> {
      return {
        lat: location.lat,
        lng: location.lon
      };
    });
  }

  private setCenterPosition(location:Location[]): Position{
    const FIRST_POSITION: number = 0;
    return {
      lat: location[FIRST_POSITION].lat,
      lng: location[FIRST_POSITION].lon
    };
  }

}
