import { Component } from '@angular/core';
import { GalleryComponent } from '../gallery/gallery.component';

@Component({
  selector: 'app-show-gallary',
  standalone: true,
  imports: [GalleryComponent],
  templateUrl: './show-gallary.component.html',
  styleUrl: './show-gallary.component.scss'
})
export class ShowGallaryComponent {

}
