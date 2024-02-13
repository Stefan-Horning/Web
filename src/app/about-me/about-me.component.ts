import { Component } from '@angular/core';
import { GalleryComponent } from '../gallery/gallery.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [GalleryComponent,RouterLink],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

}
