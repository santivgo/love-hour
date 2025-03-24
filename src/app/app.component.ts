import { Component, Renderer2, OnInit, ElementRef } from '@angular/core';
import { ICarouselImage } from './interfaces/carousel-images';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.sass'
})
export class AppComponent {
  div_content_active: boolean = false;
  title = `programei tanto, que não consegui pensar num texto bonito entao:`
  content: string = `Que nosso amor seja igual a pomba do jumento: grande, forte, as vezes pode balançar, mas
                    ninguém tem coragem de se meter na frente!!!`
  dateNow: Date = new Date(2025, 0, 18);

  imageList: ICarouselImage[] = [{
    imageSrc: 'assets/img/1.jpg',
  },
  {
    imageSrc: 'assets/img/2.jpg'
  },
  {
    imageSrc: 'assets/img/3.jpg'
  },
  {
    imageSrc: 'assets/img/4.jpg'
  },
  {
    imageSrc: 'assets/img/5.jpg'
  },
  {
    imageSrc: 'assets/img/6.jpg'
  }, {
    imageSrc: 'assets/img/7.jpg'
  },
  ];

  toggle_active(event: boolean) {
    this.div_content_active = true;
  }



}
