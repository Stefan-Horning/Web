import { CommonModule, } from '@angular/common';
import { Component, OnInit,Renderer2 } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
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
    // Pfad-Ende der aktuellen Route ermitteln (funktioniert auch beim Prerendering auf dem Server)
    let pathname = this.router.url.split('?')[0].split('#')[0];
    pathname = pathname.replace(/^\//, '');

    if(pathname == ''){
      this.currentUrl = 'Home';
    }else{
      this.currentUrl = pathname;
    }
  }

}
