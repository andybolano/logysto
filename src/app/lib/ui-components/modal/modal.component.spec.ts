import { TestComponent } from '@shared/mocks/stubs/test.component';
import { ContentType } from './utils/content-type.enum';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ModalRef } from './utils/modal.ref';
import { TranslateFacadeTestingModule } from '@lib/common-services/services/translate-facade';
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalComponent } from './modal.component';

describe( 'ModalComponent',() => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;
  let modalRef: ModalRef;

  beforeEach( async () => {
    await TestBed.configureTestingModule( {
      declarations: [
        ModalComponent
      ],imports: [
        CommonModule,
        OverlayModule,
        NoopAnimationsModule,
        TranslateFacadeTestingModule
      ],
      providers: [
        {
          provide: ModalRef,
          useValue: { close: jest.fn(),dispose: jest.fn()}
        }
      ]
    } )
      .compileComponents();
  } );

  beforeEach( () => {
    modalRef = TestBed.inject( ModalRef );
    fixture = TestBed.createComponent( ModalComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create',() => {
    expect( component ).toBeTruthy();
  } );

  it( 'should content be equal string ',() => {
    modalRef.content = 'test';
    component.ngOnInit();
    expect( component.contentType ).toBe(ContentType.SimpleString);
  } );

  it( 'should content be equal TemplateRef ',() => {
    modalRef.content = TestBed.createComponent( TestComponent ).componentInstance.templateTest;
    component.ngOnInit();
    expect( component.contentType ).toBe(ContentType.TemplateRef);
  } );

  it( 'should content be equal Component ',() => {
     modalRef.content = TestComponent;
    component.ngOnInit();
    expect( component.contentType ).toBe(ContentType.ComponentRef);
  } );

  it( 'should close modal',() => {
    const closeModal = jest.spyOn( modalRef,'close' );
    component.close();
    expect( closeModal ).toBeCalled();
  } );

} );
