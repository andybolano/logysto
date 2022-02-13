import {Component,OnInit} from '@angular/core';


const maxSize: number = 820;
@Component( {
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: [ './layout.component.scss' ]
} )
export class LayoutComponent implements OnInit {
  public hiddenSidebar: boolean = window.screen.width < maxSize;

  ngOnInit(): void {
    this.mobileViewConf();
  }

  private mobileViewConf(): void {
    window.onresize = () => this.toggleSidebar( window.screen.width < maxSize );
  }

  public toggleSidebar( showSidebar: boolean ): void {
    this.hiddenSidebar = showSidebar;
  }
}
