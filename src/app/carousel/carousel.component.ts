import { CommonModule } from '@angular/common';
import { Component,ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { ViewportScroller } from "@angular/common";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [ CommonModule,],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})

export class CarouselComponent implements AfterViewInit, OnDestroy{
  images: string[] = [
    'assets/img/Main-picture.webp',
    'assets/img/photo2.webp',
    'assets/img/head-3.webp',
    'assets/img/head7.webp',
    'assets/img/head6.webp',
  ];

  imagesstyle:string[] = [
    'right',
    'right',
    'center',
    'center',
    'center',
  ]
  currentImageIndex: number = 0;
  private intervalId: any;

  constructor(private el: ElementRef,private scroller: ViewportScroller) {}

  ngAfterViewInit(): void {
    this.intervalId = setInterval(() => {
      this.nextImage();
    }, 4750); 
  }

  scrollToAbMe(){
    this.scroller.scrollToAnchor("scrollToMe")

  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  nextImage(): void {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
  }
}
