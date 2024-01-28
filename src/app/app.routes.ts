import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { BrautComponent } from './braut/braut.component';

export const routes: Routes = [
    {path: '', component:HomeComponent},
    {path: 'AboutMe', component:AboutMeComponent},
    {path: 'Braut', component:BrautComponent},
    {path: '**', redirectTo: ''}
];