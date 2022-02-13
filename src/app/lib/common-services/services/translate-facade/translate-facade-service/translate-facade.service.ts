import {Injectable} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Observable,BehaviorSubject} from 'rxjs';
import {shareReplay} from 'rxjs/operators';
import {language} from '../utilities/language.enum';

@Injectable( {
  providedIn: 'root'
} )
export class TranslateFacadeService {

  private readonly languageApp: BehaviorSubject<string> = new BehaviorSubject<string>( '' );
  public languageApp$: Observable<string> = this.languageApp.asObservable().pipe( shareReplay( 1 ) );

  constructor ( private readonly translate: TranslateService ) {}

  public switchLang( lang: language ): void {
    this.translate.use( lang );
    this.languageApp.next( lang );
  }

  public get(
    key: string | Array<string>,
    interpolateParams?: Object ): Observable<string | unknown> {
    return this.translate.get( key,interpolateParams );
  }

  public instant(
    key: string | Array<string>,
    interpolateParams?: Object ): string {
    return this.translate.instant( key,interpolateParams );
  }

}
