import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { BrautComponent } from './braut/braut.component';
import { PreisComponent } from './preis/preis.component';
import { KontactComponent } from './kontact/kontact.component';

export const routes: Routes = [
    {path: '', component:HomeComponent},
    {path: 'AboutMe', component:AboutMeComponent},
    {path: 'Braut', component:BrautComponent},
    {path: 'Preis', component:PreisComponent},
    {path: 'Kontakt', component:KontactComponent},
    {path: '**', redirectTo: ''}
];