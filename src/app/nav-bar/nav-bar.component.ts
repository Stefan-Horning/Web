import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent implements OnInit{
  currentUrl!: any | null;

  constructor(private router: Router) { 
    this.getURL();
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
      pathname = 'HOME';
      this.currentUrl = 'HOME';
    }else{
      this.currentUrl = pathname;
    }
   
    console.log(pathname); // /my-path
  }

}
