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
      this.currentImages = ['./assets/img/AboutMe/AboutMe1.webp'];
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
    './assets/img/StylingKreationen/1.webp',
    './assets/img/StylingKreationen/2.webp',
    './assets/img/StylingKreationen/3.webp',
    './assets/img/StylingKreationen/4.webp',
    './assets/img/StylingKreationen/5.webp',
    './assets/img/StylingKreationen/6.webp',
    './assets/img/StylingKreationen/7.webp',
    './assets/img/StylingKreationen/8.webp',
    './assets/img/StylingKreationen/9.webp',
    './assets/img/StylingKreationen/10.webp',
    './assets/img/StylingKreationen/11.webp',
    './assets/img/StylingKreationen/12.webp',
    './assets/img/StylingKreationen/13.webp',
    './assets/img/StylingKreationen/14.webp',
    './assets/img/StylingKreationen/15.webp',
    './assets/img/StylingKreationen/16.webp',
    './assets/img/StylingKreationen/17.webp',
    './assets/img/StylingKreationen/18.webp',
    './assets/img/StylingKreationen/19.webp',
    './assets/img/StylingKreationen/20.webp',
    './assets/img/StylingKreationen/21.webp',
    './assets/img/StylingKreationen/22.webp',
    './assets/img/StylingKreationen/23.webp',
    './assets/img/StylingKreationen/24.webp',
    './assets/img/StylingKreationen/25.webp',
    './assets/img/StylingKreationen/26.webp',
    './assets/img/StylingKreationen/27.webp',
    './assets/img/StylingKreationen/28.webp',
  ]

  frisurenWelt:string[] = [
    './assets/img/Frisurenwelt/1.webp',
    './assets/img/Frisurenwelt/2.webp',
    './assets/img/Frisurenwelt/3.webp',
    './assets/img/Frisurenwelt/4.webp',
    './assets/img/Frisurenwelt/5.webp',
    './assets/img/Frisurenwelt/6.webp',
    './assets/img/Frisurenwelt/7.webp',
    './assets/img/Frisurenwelt/8.webp',
    './assets/img/Frisurenwelt/9.webp',
    './assets/img/Frisurenwelt/11.webp',
    './assets/img/Frisurenwelt/12.webp',
    './assets/img/Frisurenwelt/13.webp',
    './assets/img/Frisurenwelt/14.webp',
    './assets/img/Frisurenwelt/15.webp',
    './assets/img/Frisurenwelt/16.webp',
    './assets/img/Frisurenwelt/17.webp',
    './assets/img/Frisurenwelt/18.webp',
    './assets/img/Frisurenwelt/19.webp',
    './assets/img/Frisurenwelt/20.webp',
    './assets/img/Frisurenwelt/21.webp',
    './assets/img/Frisurenwelt/22.webp',
  ]

  BrautImages:string[] = [
    './assets/img/Brautglanz/braut1.webp',
    './assets/img/Brautglanz/braut2.webp',
    './assets/img/Brautglanz/braut3.webp',
    './assets/img/Brautglanz/braut4.webp',
    './assets/img/Brautglanz/braut5.webp',
    './assets/img/Brautglanz/braut6.webp',
    './assets/img/Brautglanz/braut7.webp',
    './assets/img/Brautglanz/braut11.webp',
    './assets/img/Brautglanz/braut12.webp',
    './assets/img/Brautglanz/braut24.webp',
    './assets/img/Brautglanz/braut13.webp',
    './assets/img/Brautglanz/braut14.webp',
    './assets/img/Brautglanz/braut15.webp',
    './assets/img/Brautglanz/braut16.webp',
    './assets/img/Brautglanz/braut17.webp',
    './assets/img/Brautglanz/braut18.webp',
    './assets/img/Brautglanz/braut19.webp',
    './assets/img/Brautglanz/braut20.webp',
    './assets/img/Brautglanz/braut21.webp',
    './assets/img/Brautglanz/braut22.webp',
    './assets/img/Brautglanz/braut23.webp',
    './assets/img/photo3.webp',
  ]

  AboutMeImages:string[] = [
    './assets/img/AboutMe/AboutMe1.webp',
    './assets/img/AboutMe/AboutMe2.webp',
    './assets/img/AboutMe/AboutMe3.webp',
    './assets/img/AboutMe/AboutMe4.webp',
    './assets/img/AboutMe/AboutMe5.webp',
    './assets/img/AboutMe/AboutMe6.webp',
    './assets/img/AboutMe/AboutMe7.webp',
    './assets/img/AboutMe/AboutMe8.webp',
    './assets/img/AboutMe/AboutMe9.webp',
    './assets/img/AboutMe/AboutMe10.webp',
    './assets/img/AboutMe/AboutMe11.webp',
    './assets/img/AboutMe/AboutMe12.webp',
    './assets/img/AboutMe/AboutMe13.webp',
    './assets/img/AboutMe/AboutMe14.webp',
    './assets/img/AboutMe/AboutMe15.webp',
    './assets/img/AboutMe/AboutMe16.webp',
    './assets/img/AboutMe/AboutMe17.webp',
  ]

  allImages:string[] = [
   './assets/img/first15/first1.webp',
   './assets/img/first15/first4.webp',
   './assets/img/first15/first3.webp',
   './assets/img/first15/first2.webp',
   './assets/img/first15/first5.webp',
   './assets/img/first15/first6.webp',
   './assets/img/first15/first7.webp',
   './assets/img/first15/first8.webp',
   './assets/img/first15/first9.webp',
   './assets/img/first15/first12.webp',
   './assets/img/first15/first11.webp',
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
