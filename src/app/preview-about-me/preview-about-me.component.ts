import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
//import * as AOS from 'aos';
import AOS from 'aos';
import 'aos/dist/aos.css';
@Component({
  selector: 'app-preview-about-me',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './preview-about-me.component.html',
  styleUrl: './preview-about-me.component.scss'
})
export class PreviewAboutMeComponent implements OnInit{
  previewArray:any = [
    {
      src: './assets/img/firstAboutMe.jpg',
      title: 'Swetlana Horning',
      span: 'Ich bin zutiefst davon überzeugt, dass Make-up die Kraft hat,dein Selbstbewusstsein zu stärken und dir dadurch ein fantastisches Gefühl zu verleihen.',
      button: 'Mehr über mich',
      reverse: false,
    },
    {
      src: './assets/img/all-49.jpeg',
      title: 'Braut',
      span: 'Möchtest Du auf Deiner Hochzeit wie ein Star erstrahlen oder Deine natürliche Schönheit auf eine ganz besondere Art betonen? Ich unterstütze Dich dabei, Dein perfektes Brautstyling zu kreieren!',
      button: 'Mehr über Braut',
      reverse: true,
    },
    {
      src: './assets/img/head-2.jpg',
      title: 'Preisliste',
      span: 'Entdecken Sie meine Angebote, passend zu Ihren Bedürfnissen!',
      button: 'Mehr zu meinen Preisen',
      reverse: false,
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
