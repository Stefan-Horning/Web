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
  currentUrl!:string;

  constructor(){
    this.getURL();
    this.currentImages = [];
    if(this.currentUrl = 'HOME'){
      this.currentImages = this.allImages;
    }else if(this.currentUrl = 'AboutMe'){
      this.currentImages = this.AboutMeImages;
    }else{
      this.currentImages = ['./assets/img/über mich bilder/AboutMe1.jpg'];
    }
  }

  getURL(){
    const url = location.href;

    // Gibt nur das Ende des URL-Pfades zurück
    let pathname = location.pathname;
    pathname = pathname.slice(1);

    if(pathname == ''){
      pathname = 'HOME';
      this.currentUrl = 'HOME';
    }else{
      this.currentUrl = pathname;
    }
   
    console.log(pathname); // /my-path
  }

  currentImages:string[] = [

  ]

  AboutMeImages:string[] = [
    './assets/img/AboutMe/AboutMe1.jpg',
    './assets/img/AboutMe/AboutMe2.jpg',
    './assets/img/AboutMe/AboutMe3.jpg',
    './assets/img/AboutMe/AboutMe4.jpg',
    './assets/img/AboutMe/AboutMe5.jpg',
    './assets/img/AboutMe/AboutMe6.jpg',
    './assets/img/AboutMe/AboutMe7.jpg',
    './assets/img/AboutMe/AboutMe8.jpg',
    './assets/img/AboutMe/AboutMe9.jpg',
    './assets/img/AboutMe/AboutMe10.jpg',
    './assets/img/AboutMe/AboutMe11.jpg',
    './assets/img/AboutMe/AboutMe12.jpg',
    './assets/img/AboutMe/AboutMe13.jpg',
    './assets/img/AboutMe/AboutMe14.jpg',
    './assets/img/AboutMe/AboutMe15.jpg',
    './assets/img/AboutMe/AboutMe16.jpg',
    './assets/img/AboutMe/AboutMe17.jpg',
  ]

  allImages:string[] = [
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
