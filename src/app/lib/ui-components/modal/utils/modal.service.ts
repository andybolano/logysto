import {Injectable,Injector,TemplateRef,Type} from '@angular/core';
import {Overlay,OverlayConfig,OverlayRef} from '@angular/cdk/overlay';

import {ComponentPortal} from '@angular/cdk/portal';
import {ModalComponent} from '../modal.component';
import {ModalRef} from './modal.ref';
import {TypeCloseEvent} from './overlay-close-event.interface';

@Injectable( {
  providedIn: 'root'
} )
export class ModalService {

  private modalRef: ModalRef;

  constructor (
    private readonly overlay: Overlay,
    private readonly injector: Injector ) {}

  public open<R = unknown,T = unknown>(
    content: string | TemplateRef<unknown> | Type<unknown>,
    data: T,disableClose: boolean = false ): ModalRef {

    const config: OverlayConfig = new OverlayConfig( {
      scrollStrategy: this.overlay.scrollStrategies.block(),
      hasBackdrop: true,
      panelClass: [ 'modal__container' ],
      backdropClass: [ 'modal__back-drop' ],
      positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically()
    } );
    const overlayRef: OverlayRef = this.overlay.create( config );
    const modalRef: ModalRef = new ModalRef<R,T>( overlayRef,content,data );
    const newInjector: Injector = Injector.create( {providers: [ {provide: ModalRef,useValue: modalRef} ],parent: this.injector} );
    overlayRef.attach( new ComponentPortal( ModalComponent,null,newInjector ) );

    if( !disableClose ) {
      overlayRef.backdropClick().subscribe( () => modalRef._close( {typeCloseEvent: TypeCloseEvent.BackdropClick,data: null} ) );
    }
    this.modalRef = modalRef;
    return modalRef;
  }

  public close( data = null ): void {
    this.modalRef?.close( data );
  }

  public getModalRef(): ModalRef {
    return this.modalRef;
  }

}
