import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { BrautComponent } from './braut/braut.component';
import { PreisComponent } from './preis/preis.component';
import { KontactComponent } from './kontact/kontact.component';
import { MainGallaryComponent } from './main-gallary/main-gallary.component';
import { ShowGallaryComponent } from './show-gallary/show-gallary.component';
import { ImprintComponent } from './imprint/imprint.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        data: {
            title: 'Make-up Artist & Friseurmeisterin in Krefeld | Swetlana Horning',
            description: 'Professionelles Make-up, Brautstyling & Hairstyling von Swetlana Horning in Krefeld. Mobiler Service für Hochzeit, Foto, Gala & Events. Jetzt unverbindlich anfragen!'
        }
    },
    {
        path: 'AboutMe',
        component: AboutMeComponent,
        data: {
            title: 'Über mich – Swetlana Horning | Make-up Artist & Friseurmeisterin',
            description: 'Seit 2000 selbstständige Friseurmeisterin & Make-up-Artistin. Lernen Sie Swetlana Horning aus Krefeld kennen – Leidenschaft, Know-how und Fingerspitzengefühl für Ihr Styling.'
        }
    },
    {
        path: 'Braut',
        component: BrautComponent,
        data: {
            title: 'Brautstyling & Brautfrisur in Krefeld | Swetlana Horning',
            description: 'Brautstyling-Paket inkl. Probetermin, Brautfrisur & Make-up am Hochzeitstag. Mobil in Krefeld und Umgebung. Prüfen Sie jetzt die Verfügbarkeit für Ihren Hochzeitstag!'
        }
    },
    {
        path: 'Preis',
        component: PreisComponent,
        data: {
            title: 'Preise für Make-up, Brautstyling & Frisuren | Swetlana Horning',
            description: 'Transparente Preisliste: Abend-Make-up ab 60 €, Brautstyling 450 €, Hochsteckfrisuren ab 60 €. Mobiler Make-up- & Hairstyling-Service in Krefeld und Umgebung.'
        }
    },
    {
        path: 'Kontakt',
        component: KontactComponent,
        data: {
            title: 'Kontakt & Terminanfrage | Swetlana Horning Make-up Artist Krefeld',
            description: 'Kontaktieren Sie Swetlana Horning für Make-up, Brautstyling & Hairstyling in Krefeld – per Kontaktformular, WhatsApp, Telefon oder E-Mail. Ich freue mich auf Sie!'
        }
    },
    {
        path: 'Galerie',
        component: MainGallaryComponent,
        data: {
            title: 'Galerie – Make-up, Brautstyling & Frisuren | Swetlana Horning',
            description: 'Einblicke in meine Arbeit: Brautstyling, Frisuren und kreative Make-up-Looks. Entdecken Sie die Galerie von Make-up Artist Swetlana Horning aus Krefeld.'
        }
    },
    {
        path: 'Brautglanz',
        component: ShowGallaryComponent,
        data: {
            title: 'Brautglanz – Brautstyling-Galerie | Swetlana Horning Krefeld',
            description: 'Brautstyling-Galerie: echte Bräute, Brautfrisuren und Hochzeits-Make-up von Swetlana Horning. Lassen Sie sich für Ihren großen Tag inspirieren.'
        }
    },
    {
        path: 'Frisurenwelt',
        component: ShowGallaryComponent,
        data: {
            title: 'Frisurenwelt – Hairstyling-Galerie | Swetlana Horning Krefeld',
            description: 'Hochsteckfrisuren, Locken und Styling-Ideen in der Frisurenwelt von Friseurmeisterin Swetlana Horning aus Krefeld.'
        }
    },
    {
        path: 'Kreatives',
        component: ShowGallaryComponent,
        data: {
            title: 'Kreatives – Make-up & Styling-Kreationen | Swetlana Horning',
            description: 'Kreative Make-up- und Styling-Looks für Foto, Mode, TV und Events von Make-up Artist Swetlana Horning aus Krefeld.'
        }
    },
    {
        path: 'Impressum',
        component: ImprintComponent,
        data: {
            title: 'Impressum & Datenschutz | Swetlana Horning',
            description: 'Impressum und Datenschutzerklärung von Swetlana Horning, Make-up Artist & Friseurmeisterin aus Krefeld.',
            robots: 'noindex, follow'
        }
    },
    { path: '**', redirectTo: '' },

];
