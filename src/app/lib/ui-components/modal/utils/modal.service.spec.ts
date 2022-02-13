import { ModalRef } from './modal.ref';
import { ModalService } from './modal.service';
import { Overlay, OverlayModule, OverlayRef } from '@angular/cdk/overlay';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Injector } from '@angular/core';
import { TestBed } from '@angular/core/testing';
describe('ModalService', () => {
  let service: ModalService;
  let overlay: Overlay;
  let injector: Injector;
  let overlayRef: OverlayRef;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        OverlayModule,
        HttpClientTestingModule
      ],
      providers: [
        {
          provide: OverlayRef,
          useValue: {dispose: jest.fn()}
        }
      ]
    });
    overlay = TestBed.inject(Overlay);
    injector = TestBed.inject(Injector);
    overlayRef = TestBed.inject( OverlayRef );
    service = new ModalService( overlay,injector );
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
