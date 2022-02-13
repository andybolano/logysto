import { Component, Input } from '@angular/core';
import { LogoType } from './logo-type.enum';

@Component( {
  selector: 'app-logo',
  templateUrl: './logo.component.html'
} )
export class LogoComponent {
  @Input() styleClass: string;
  @Input() logoType: LogoType = LogoType.basic;
  @Input() width: string = '25rem';
}
