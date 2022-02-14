import {Component,OnInit} from '@angular/core';


const maxSize: number = 820;
@Component( {
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: [ './layout.component.scss' ]
} )
export class LayoutComponent implements OnInit {
  public hiddenSidebar: boolean = window.innerWidth < maxSize;

  ngOnInit(): void {
    this.mobileViewConf();
  }

  private mobileViewConf(): void {
    window.onresize = () => this.toggleSidebar(  window.innerWidth < maxSize );
  }

  public toggleSidebar( showSidebar: boolean ): void {
    this.hiddenSidebar = showSidebar;
  }
}
