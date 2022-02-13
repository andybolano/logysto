import {
  Component,
  OnInit,
  TemplateRef,
  Type,
  ChangeDetectionStrategy
} from '@angular/core';
import { insertRemoveTrigger } from '@lib/angular-animations';
import { ContentType } from './utils/content-type.enum';
import { ModalRef } from './utils/modal.ref';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  animations: [insertRemoveTrigger],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalComponent implements OnInit {
  public contentType: ContentType;
  public content: string | TemplateRef<unknown> | Type<unknown>;
  public context: Object;

  constructor(private readonly modalRef: ModalRef) {}

  public ngOnInit(): void {
    this.content = this.modalRef.content;
    if (this.content instanceof TemplateRef) {
      this.contentType = ContentType.TemplateRef;
      this.context = {
        close: this.modalRef.close.bind(this.modalRef)
      };
      return;
    }
    this.contentType =
      ContentType.SimpleString === typeof this.content
        ? ContentType.SimpleString
        : ContentType.ComponentRef;
  }

  public close(): void {
    this.modalRef.close(null);
  }
}
