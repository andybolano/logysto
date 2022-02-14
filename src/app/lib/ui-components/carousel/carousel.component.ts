import {AfterViewInit,ChangeDetectionStrategy,ChangeDetectorRef,Component,ElementRef,Input,OnInit,ViewChild} from '@angular/core';

@Component( {
  selector: 'lgy-carousel',
  templateUrl: './carousel.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
} )
export class CarouselComponent implements OnInit,AfterViewInit {
  @ViewChild( 'slides',{static: true} ) slides: ElementRef;
  @Input() isActionsActive: boolean = true;
  public slideIndex: number = 1;
  public amountLines: unknown[];

  constructor (
    private readonly detectChanges: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.fillArraySlider();
  }

  ngAfterViewInit(): void {
    this.addEffectToSlides();
    this.showSlides();
  }


  private fillArraySlider(): void {
    this.amountLines = Array( this.slides.nativeElement.children.length ).fill( 'line' );
  }


  private addEffectToSlides() {
    for( let i = 0; i < this.amountSlides; i++ ) {
      const className = this.slides.nativeElement.children[ i ].className;
      this.slides.nativeElement.children[ i ].className = `${ className } fade`;
    }
  }

  public plusSlides( n: number ): void {
    this.slideIndex += n;
    this.showSlides();
  }

  public currentSlide( n: number ): void {
    this.slideIndex = n + 1;
    this.showSlides();
  }

  private showSlides() {
    const slides: HTMLElement[] = this.slides.nativeElement.children as HTMLElement[];
    if( this.slideIndex > this.amountSlides ) {
      this.slideIndex = 1;
    }
    if( this.slideIndex < 1 ) {
      this.slideIndex = this.amountSlides;
    }
    for( let i = 0; i < this.amountSlides; i++ ) {
      slides[ i ].style.display = 'none';
    }
    slides[ this.slideIndex - 1 ].style.display = 'block';
    this.detectChanges.detectChanges();
  }

  private get amountSlides() {
    const amountActionButtons: number = 2;
    return this.isActionsActive ?
      this.slides.nativeElement.children.length - amountActionButtons : this.slides.nativeElement.children.length;
  }
}
