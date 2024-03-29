import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-preis',
  standalone: true,
  imports: [],
  templateUrl: './preis.component.html',
  styleUrl: './preis.component.scss'
})
export class PreisComponent implements OnInit{
  ngOnInit(): void {
    AOS.init({
      duration: 550,
    });
  }

  ngAfterViewInit(){
    setTimeout(() =>{
      AOS.refresh();
    },500);
  }
}
