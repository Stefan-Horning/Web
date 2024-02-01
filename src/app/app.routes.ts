import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { BrautComponent } from './braut/braut.component';
import { PreisComponent } from './preis/preis.component';
import { KontactComponent } from './kontact/kontact.component';
import { MainGallaryComponent } from './main-gallary/main-gallary.component';
import { GalleryComponent } from './gallery/gallery.component';

export const routes: Routes = [
    {path: '', component:HomeComponent},
    {path: 'AboutMe', component:AboutMeComponent},
    {path: 'Braut', component:BrautComponent},
    {path: 'Preis', component:PreisComponent},
    {path: 'Kontakt', component:KontactComponent},
    {path: 'Galerie', component:MainGallaryComponent, children: [
        {
          path: 'Brautglanz', // child route path
          component: GalleryComponent, // child route component that the router renders
        },
        {
            path: 'Frisurenwelt', // child route path
            component: GalleryComponent, // child route component that the router renders
        },
        {
            path: 'Kreatives', // child route path
            component: GalleryComponent, // child route component that the router renders
        }]},
    {path: '**', redirectTo: ''}
];