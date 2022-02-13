import {Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {TranslateFacadeService,language} from '@lib/common-services/services/translate-facade';
import { LayoutRoutesMap } from '@shared/dictionaries';

@Component( {
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
} )
export class AppComponent implements OnInit {

  constructor (
    private readonly translateFacadeService: TranslateFacadeService,
    private readonly router: Router
  ) {}

  public ngOnInit(): void {
    this.setAppLanguage();
  }

  public redirectToDashboard(): void{
      this.router.navigateByUrl( LayoutRoutesMap.dashboard );
  }


  private setAppLanguage(): void {
    this.translateFacadeService.switchLang( language.es );
  }



}
