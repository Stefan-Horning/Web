import { Component, OnInit } from '@angular/core';
//import * as AOS from 'aos';
import AOS from 'aos';
import 'aos/dist/aos.css';
@Component({
  selector: 'app-preview-about-me',
  standalone: true,
  imports: [],
  templateUrl: './preview-about-me.component.html',
  styleUrl: './preview-about-me.component.scss'
})
export class PreviewAboutMeComponent implements OnInit{
  ngOnInit(): void {
    AOS.init({
      duration: 750,
    });
  }

  ngAfterViewInit(){
    setTimeout(() =>{
      AOS.refresh();
    },500);
  }
}
