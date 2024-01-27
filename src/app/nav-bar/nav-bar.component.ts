import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent implements OnInit{
  currentUrl?: string;

  constructor(private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.route.url.subscribe(urlSegments => {
      // Der letzte Segmente des URL-Pfads ist das, was Sie suchen
      this.currentUrl = urlSegments[urlSegments.length - 1].path;
      if(this.currentUrl == ''){
        this.currentUrl = 'HOME';
      }
      console.log(this.currentUrl);
    });
  }
}
