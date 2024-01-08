import { Component } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';
import { PreviewAboutMeComponent } from '../preview-about-me/preview-about-me.component';
import { GalleryComponent } from '../gallery/gallery.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselComponent,PreviewAboutMeComponent,GalleryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
