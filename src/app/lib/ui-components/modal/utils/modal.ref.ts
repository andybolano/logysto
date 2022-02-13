import { OverlayRef } from '@angular/cdk/overlay';
import { TemplateRef, Type } from '@angular/core';
import { Subject } from 'rxjs';
import { OverlayCloseEvent, TypeCloseEvent } from './overlay-close-event.interface';

export class ModalRef<R = unknown, T = unknown> {

  public afterClosed: Subject<OverlayCloseEvent<R | unknown>>;

  constructor(
    private  readonly overlay: OverlayRef,
    public content: string | TemplateRef<unknown> | Type<unknown>,
    public data: T
  ){
    this.afterClosed = new Subject<OverlayCloseEvent<R | unknown>>();
  }

  public _close(eventClose: OverlayCloseEvent<R>): void {
    this.overlay.dispose();
    this.afterClosed.next(eventClose);
    this.afterClosed.complete();
  }

  public close(data?: R): void {
    this._close({
      typeCloseEvent: TypeCloseEvent.Close,
      data
    });
  }
}
