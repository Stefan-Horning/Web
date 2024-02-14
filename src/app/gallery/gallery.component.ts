import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule,SlideshowComponent,RouterLink],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent implements OnInit{
  wich: string = 'all';
  setImage:number = 0;
  open:boolean = false;
  currentUrl!:string;
  isGallary:boolean = true;

  constructor(){
    this.getURL();
    this.currentImages = [];
    if(this.currentUrl == 'Home'){
      this.currentImages = this.allImages;
    }else if(this.currentUrl == 'AboutMe'){
      this.currentImages = this.AboutMeImages;
    }else if(this.currentUrl == 'Braut' || this.currentUrl == 'Brautglanz'){
      this.currentImages = this.BrautImages;
    }else if(this.currentUrl == 'Frisurenwelt'){
      this.currentImages = this.frisurenWelt;
    }else if(this.currentUrl == 'Kreatives'){
      this.currentImages = this.kreativWelt;
    }else{
      this.currentImages = ['./assets/img/AboutMe/AboutMe1.jpg'];
    }
  }

  getURL(){
    const url = location.href;

    // Gibt nur das Ende des URL-Pfades zurück
    let pathname = location.pathname;
    pathname = pathname.slice(1);

    if(pathname == ''){
      pathname = 'HOME';
      this.currentUrl = 'Home';
    }else{
      this.currentUrl = pathname;
    }
  
  }

  currentImages:string[] = [

  ]

  kreativWelt:string[] = [
    './assets/img/StylingKreationen/1.jpg',
    './assets/img/StylingKreationen/2.jpg',
    './assets/img/StylingKreationen/3.jpg',
    './assets/img/StylingKreationen/4.jpg',
    './assets/img/StylingKreationen/5.jpg',
    './assets/img/StylingKreationen/6.jpg',
    './assets/img/StylingKreationen/7.jpg',
    './assets/img/StylingKreationen/8.jpg',
    './assets/img/StylingKreationen/9.jpg',
    './assets/img/StylingKreationen/10.jpg',
    './assets/img/StylingKreationen/11.jpg',
    './assets/img/StylingKreationen/12.jpg',
    './assets/img/StylingKreationen/13.jpg',
    './assets/img/StylingKreationen/14.jpg',
    './assets/img/StylingKreationen/15.jpg',
    './assets/img/StylingKreationen/16.jpg',
    './assets/img/StylingKreationen/17.jpg',
    './assets/img/StylingKreationen/18.jpg',
    './assets/img/StylingKreationen/19.jpg',
    './assets/img/StylingKreationen/20.jpg',
    './assets/img/StylingKreationen/21.jpg',
    './assets/img/StylingKreationen/22.jpg',
    './assets/img/StylingKreationen/23.jpg',
    './assets/img/StylingKreationen/24.jpg',
    './assets/img/StylingKreationen/25.jpg',
    './assets/img/StylingKreationen/26.jpeg',
    './assets/img/StylingKreationen/27.jpeg',
  ]

  frisurenWelt:string[] = [
    './assets/img/Frisurenwelt/1.jpg',
    './assets/img/Frisurenwelt/2.jpg',
    './assets/img/Frisurenwelt/3.jpeg',
    './assets/img/Frisurenwelt/4.jpg',
    './assets/img/Frisurenwelt/5.jpg',
    './assets/img/Frisurenwelt/6.jpg',
    './assets/img/Frisurenwelt/7.jpg',
    './assets/img/Frisurenwelt/8.jpg',
    './assets/img/Frisurenwelt/9.jpg',
    './assets/img/Frisurenwelt/10.jpg',
    './assets/img/Frisurenwelt/11.jpg',
    './assets/img/Frisurenwelt/12.jpeg',
    './assets/img/Frisurenwelt/13.jpg',
  ]

  BrautImages:string[] = [
    './assets/img/Brautglanz/braut1.jpg',
    './assets/img/Brautglanz/braut2.jpg',
    './assets/img/Brautglanz/braut3.jpg',
    './assets/img/Brautglanz/braut4.jpg',
    './assets/img/Brautglanz/braut5.jpg',
    './assets/img/Brautglanz/braut6.jpg',
    './assets/img/Brautglanz/braut7.jpg',
    './assets/img/Brautglanz/braut11.jpg',
    './assets/img/Brautglanz/braut12.jpg',
    './assets/img/Brautglanz/braut13.jpg',
    './assets/img/photo3.jpg',
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
