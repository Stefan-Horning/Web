import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
//import * as AOS from 'aos';
import AOS from 'aos';
import 'aos/dist/aos.css';
@Component({
  selector: 'app-preview-about-me',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './preview-about-me.component.html',
  styleUrl: './preview-about-me.component.scss'
})
export class PreviewAboutMeComponent implements OnInit{
  previewArray:any = [
    {
      src: './assets/img/About.webp',
      title: 'Hallo! Ich bin Swetlana Horning',
      subTitle: 'Frisuermeisterin & Makeup-Artist',
      span: 'Ich bin zutiefst davon überzeugt, dass Make-up die Kraft hat, Dein Selbstbewusstsein zu stärken und dir dadurch ein fantastisches Gefühl zu verleihen.',
      button: 'Mehr über mich',
      reverse: false,
      nav: 'AboutMe'
    },
    {
      src: './assets/img/all-49.webp',
      title: 'Perfekte Eleganz für den Hochzeitstag',
      subTitle: "Vom Traum zur Wirklichkeit: Unvergessliches Brautstyling",
      span: 'Möchtest Du auf Deiner Hochzeit wie ein Star erstrahlen oder Deine natürliche Schönheit auf eine ganz besondere Art betonen? Ich unterstütze Dich dabei, Dein perfektes Brautstyling zu kreieren!',
      button: 'Mehr über Braut',
      reverse: true,
      nav: 'Braut'
    },
    {
      src: './assets/img/head-2.webp',
      title: 'Preisliste für strahlende Schönheit',
      subTitle: "Ein Blick auf meine Preisliste für exklusive Friseur- und Makeup-Dienstleistungen",
      span: 'Entdecken Sie meine Angebote, passend zu Ihren Bedürfnissen!',
      button: 'Mehr zu meinen Preisen',
      reverse: false,
      nav: 'Preis'
    },
  ]
  
  ngOnInit(): void {
    AOS.init({
      duration: 750,
    });
  }

  ngAfterViewInit(){
    setTimeout(() =>{
      AOS.refresh();
    },500);
  }
}
