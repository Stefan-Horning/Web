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
   './assets/img/first15/first1.jpg',
   './assets/img/first15/first4.jpg',
   './assets/img/first15/first3.jpg',
   './assets/img/first15/first2.jpg',
   './assets/img/first15/first5.jpg',
   './assets/img/first15/first6.jpg',
   './assets/img/first15/first7.jpg',
   './assets/img/first15/first8.jpg',
   './assets/img/first15/first9.jpg',
   './assets/img/first15/first12.jpg',
   './assets/img/first15/first11.jpg',
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

  openSlider(i?:number){
    if(i){
      this.setImage = i;
    }
    this.open = !this.open;
  }
}
