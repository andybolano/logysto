import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

@Component( {
  selector: 'lgy-button',
  templateUrl: './button.component.html',
  styleUrls: [ './button.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
} )
export class ButtonComponent {
  @Input() public disabled: boolean;
  @Input() public buttonId: string;
  @Input() public label: string;
  @Input() public style: {[ string: string ]: string;};
  @Input() public styleClass: string;
  @Input() public type: string = 'button';

  @Output() public onBlur: EventEmitter<Event> = new EventEmitter();
  @Output() public onClick: EventEmitter<Event> = new EventEmitter();
  @Output() public onFocus: EventEmitter<Event> = new EventEmitter();
}
