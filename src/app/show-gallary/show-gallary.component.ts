import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GalleryComponent } from '../gallery/gallery.component';

@Component({
  selector: 'app-show-gallary',
  standalone: true,
  imports: [GalleryComponent],
  templateUrl: './show-gallary.component.html',
  styleUrl: './show-gallary.component.scss'
})
export class ShowGallaryComponent {
  // Unsichtbare H1 je Galerie-Route (SEO: jede Seite braucht genau eine H1)
  heading: string = 'Galerie von Swetlana Horning';

  private headings: { [path: string]: string } = {
    Brautglanz: 'Brautglanz – Brautstyling-Galerie von Swetlana Horning',
    Frisurenwelt: 'Frisurenwelt – Hairstyling-Galerie von Swetlana Horning',
    Kreatives: 'Kreatives – Make-up- und Styling-Kreationen von Swetlana Horning'
  };

  constructor(private router: Router) {
    const path = this.router.url.split('?')[0].split('#')[0].replace(/^\//, '');
    if (this.headings[path]) {
      this.heading = this.headings[path];
    }
  }
}
