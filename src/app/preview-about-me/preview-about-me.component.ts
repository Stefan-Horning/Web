import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
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
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  previewArray:any = [
    {
      src: './assets/img/About.webp',
      title: 'Hallo! Ich bin Swetlana Horning',
      subTitle: 'Friseurmeisterin & Make-up Artist aus Krefeld',
      span: 'Ich bin zutiefst davon überzeugt, dass Make-up die Kraft hat, Dein Selbstbewusstsein zu stärken und dir dadurch ein fantastisches Gefühl zu verleihen. Als Make-up Artist und Friseurmeisterin aus Krefeld style ich seit über 20 Jahren Menschen für die besonderen Momente ihres Lebens – von der Hochzeit über Gala-Abende bis hin zu Foto-, Mode- und TV-Produktionen. Ob glamourös oder natürlich: Mit Erfahrung und Fingerspitzengefühl finden wir gemeinsam den Look, der perfekt zu Dir passt.',
      button: 'Mehr über mich',
      reverse: false,
      nav: 'AboutMe'
    },
    {
      src: './assets/img/all-49.webp',
      title: 'Perfekte Eleganz für den Hochzeitstag',
      subTitle: "Vom Traum zur Wirklichkeit: Unvergessliches Brautstyling",
      span: 'Möchtest Du auf Deiner Hochzeit wie ein Star erstrahlen oder Deine natürliche Schönheit auf eine ganz besondere Art betonen? Ich unterstütze Dich dabei, Dein perfektes Brautstyling zu kreieren! Beim gemeinsamen Probetermin entwerfen wir Brautfrisur und Hochzeits-Make-up, die zu Dir, Deinem Kleid und Deinem Stil passen. Am großen Tag komme ich als mobile Stylistin direkt zu Dir nach Hause oder an Deine Location – in Krefeld und der gesamten Umgebung, zum Beispiel Kempen, Viersen, Willich, Tönisvorst oder Meerbusch. Gerne style ich auch Deine Trauzeugin oder Brautmutter. So startest Du entspannt und ohne Stress in Deine Traumhochzeit.',
      button: 'Mehr über Braut',
      reverse: true,
      nav: 'Braut'
    },
    {
      src: './assets/img/head-2.webp',
      title: 'Preisliste für strahlende Schönheit',
      subTitle: "Ein Blick auf meine Preisliste für exklusive Friseur- und Makeup-Dienstleistungen",
      span: 'Entdecken Sie meine Angebote, passend zu Ihren Bedürfnissen! Ob elegantes Abend-Make-up, festliche Hochsteckfrisur, Styling für Abiball, Gala und Feiern oder das komplette Brautstyling-Paket inklusive Probetermin: In meiner transparenten Preisliste finden Sie alle Leistungen auf einen Blick – fair kalkuliert, inklusive aller Stylingprodukte und mit mobilem Service in Krefeld und Umgebung.',
      button: 'Mehr zu meinen Preisen',
      reverse: false,
      nav: 'Preis'
    },
  ]

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        duration: 750,
      });
    }
  }

  ngAfterViewInit(){
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() =>{
        AOS.refresh();
      },500);
    }
  }
}
