import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AlertModule } from '@coreui/angular';
import { provideAnimations } from '@angular/platform-browser/animations';
import { CarouselModule } from '@coreui/angular';
import { HttpClientModule } from '@angular/common/http';  
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [AlertModule,LazyLoadImageModule, CarouselModule, CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
  providers: [provideAnimations()],
  animations: [
      trigger('slideAnimation', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate('500ms ease-out') // Du kannst die Dauer und die Beschleunigung nach Bedarf anpassen
      ]),
      transition('* => void', [
        animate('500ms ease-out', style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})

export class CarouselComponent implements OnInit{
  slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});

  constructor() { }

  ngOnInit(): void {
    this.slides[0] = {
      id: 0,
      src: 'assets/img/Main-picture.jpg',
    };
    this.slides[1] = {
      id: 1,
      src: 'assets/img/head-1.JPG',
    }
    this.slides[2] = {
      id: 2,
      src: 'assets/img/head-1.JPG',
    }
  }
}
