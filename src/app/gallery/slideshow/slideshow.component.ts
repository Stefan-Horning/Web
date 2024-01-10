import { Component, Input } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { GalleryComponent } from '../gallery.component';

@Component({
  selector: 'app-slideshow',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './slideshow.component.html',
  styleUrl: './slideshow.component.scss'
})
export class SlideshowComponent {
  @Input() images!: string[];
  @Input() wichone: number = 0;

  next(){
    if(this.wichone >= this.images.length -1){
      this.wichone = 0;
    }else{
      this.wichone += 1;
    }
    console.log(this.wichone)
  }

  constructor(private parent:GalleryComponent){}

  close(event:Event){
    if (event.target === event.currentTarget) {
      this.parent.openSlider();
    }
    event.stopPropagation();
  }

  bevor(){
    if(this.wichone <= 0){
      this.wichone = this.images.length - 1;
    }else{
      this.wichone -= 1;

    }
    console.log(this.wichone)
  }
}
