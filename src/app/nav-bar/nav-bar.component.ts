import { CommonModule, } from '@angular/common';
import { Component, OnInit,Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent implements OnInit{
  currentUrl!: any | null;
  openMobile:boolean = false;

  constructor(private router: Router) { 
    this.getURL();
  }

  openNav(){
    this.openMobile = !this.openMobile;
  }


  ngOnInit(): void {
    this.getURL();
  }
  
  getURL(){
    const url = location.href;

    // Gibt nur das Ende des URL-Pfades zurück
    let pathname = location.pathname;
    pathname = pathname.slice(1);

    if(pathname == ''){
      pathname = 'Home';
      this.currentUrl = 'Home';
    }else{
      this.currentUrl = pathname;
    }
   
    console.log(pathname); // /my-path
  }

}
