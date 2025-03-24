import { ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2 } from '@angular/core';
import { ICarouselImage } from '../../interfaces/carousel-images';

@Component({
  selector: 'app-real-content',
  standalone: false,
  templateUrl: './real-content.component.html',
  styleUrl: './real-content.component.sass',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class RealContentComponent {
  @Input({ 'alias': 'image-list', required: true })
  imageList: ICarouselImage[] = [] as ICarouselImage[];
  @Input({ 'required': true }) title: string = ''
  @Input({ 'required': true }) content: string = ''
  @Input({ 'required': true }) initialDate: any;


  constructor(private renderer: Renderer2, private el: ElementRef) { }
  ngOnInit(): void {
    setInterval(() => {

      this.createHeart()
    }, 50)

  }


  createHeart(): void {
    const heart = this.renderer.createElement('div');
    this.renderer.addClass(heart, 'heart');

    this.renderer.setStyle(heart, 'left', Math.random() * 500 + 'vw');
    this.renderer.setStyle(heart, 'animationDuration', Math.random() * 2 + 5 + 's');

    heart.innerText = '❤️';

    this.renderer.appendChild(this.el.nativeElement, heart);

    setTimeout(() => {
      this.renderer.removeChild(this.el.nativeElement, heart);
    }, 5000);
  }

}



