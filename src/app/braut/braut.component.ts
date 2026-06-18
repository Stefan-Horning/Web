import { Component } from '@angular/core';
import { GalleryComponent } from '../gallery/gallery.component';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-braut',
  standalone: true,
  imports: [GalleryComponent,RouterLink],
  templateUrl: './braut.component.html',
  styleUrl: './braut.component.scss'
})
export class BrautComponent {

}
