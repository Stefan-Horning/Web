import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-preis',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './preis.component.html',
  styleUrl: './preis.component.scss'
})
export class PreisComponent implements OnInit{
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        duration: 550,
      });
    }
  }

  ngAfterViewInit(){
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() =>{
        AOS.refresh();
      },500);
    }
  }
}
