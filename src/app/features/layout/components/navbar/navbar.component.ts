

import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input
} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit {
  @Input() public hiddenSidebar: boolean;
  @Output() private readonly toggleSidebar: EventEmitter<boolean> =
    new EventEmitter();
  public title: string = 'saludo';
  public userName:string = "Jorge";

  constructor(

  ) {}

  ngOnInit(): void {

  }



  public emitToggleSidebar(): void {
    this.toggleSidebar.emit(!this.hiddenSidebar);
  }


}
