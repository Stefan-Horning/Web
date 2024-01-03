import { Component } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';
import { PreviewAboutMeComponent } from '../preview-about-me/preview-about-me.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselComponent,PreviewAboutMeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
