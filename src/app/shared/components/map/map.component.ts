import { Location } from '@shared/types/interfaces/location.interface';
import { environment } from '@env';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


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
     this.setCenterPosition(this.locations[0]);
      this.loadLocations();
  }

  private loadLocations(): void{

  this.locations.forEach((location:Location)=>{
    this.markerPositions.push({
      lat: location.lat,
      lng: location.lon
    });
  })
  }

  private setCenterPosition(location:Location): void{
    this.center = {
      lat: location.lat,
      lng: location.lon
    };
  }

}
