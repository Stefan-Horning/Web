import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { SlideshowComponent } from './slideshow/slideshow.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule,SlideshowComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent implements OnInit{
  wich: string = 'all';
  setImage:number = 0;
  open:boolean = false;

  allImages:any = [
    './assets/img/all/all-1.jpg',
    './assets/img/all/all-2.jpg',
    './assets/img/all/all-3.jpg',
    './assets/img/all/all-4.jpg',
    './assets/img/all/all-5.jpg',
    './assets/img/all/all-6.jpg',
    './assets/img/all/all-7.jpg',
    './assets/img/all/all-8.jpg',
    './assets/img/all/all-9.jpg',
    './assets/img/all/all-10.jpg',
    './assets/img/all/all-11.jpg',
    './assets/img/all/all-12.jpg',
    './assets/img/all/all-13.jpg',
    './assets/img/all/all-14.jpg',
    './assets/img/all/all-15.jpg',
    './assets/img/all/all-16.jpg',
  ];

  ngOnInit(): void {
    AOS.init({
      duration: 550,
    });
  }

  ngAfterViewInit(){
    setTimeout(() =>{
      AOS.refresh();
    },500);
  }

  openSlider(){
    this.open = !this.open;
  }
}
