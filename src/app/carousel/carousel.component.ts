import { CommonModule } from '@angular/common';
import { Component,ElementRef, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})

export class CarouselComponent implements AfterViewInit, OnDestroy{
  images: string[] = [
    'assets/img/Main-picture.jpg',
    'assets/img/photo2.jpg',
    'assets/img/head-3.JPG',
    'assets/img/head7.jpeg',
    'assets/img/head6.jpg',
  ];
  currentImageIndex: number = 0;
  private intervalId: any;

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    this.intervalId = setInterval(() => {
      this.nextImage();
    }, 10000); 
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  nextImage(): void {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
  }
}
