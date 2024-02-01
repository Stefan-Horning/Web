import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-kontact',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,FormsModule],
  templateUrl: './kontact.component.html',
  styleUrl: './kontact.component.scss'
})
export class KontactComponent {
  send:boolean = false;
  name:any;
  email:any;
  massage:any;
  contactForm = new FormGroup({
    nameInput: new FormControl('', [Validators.required, Validators.minLength(2)]),
    emailInput: new FormControl('', [Validators.required, Validators.email, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.(de|com|net|nl|org|uk|cn|au|dk|pl|cz|at|lu|ru)$')]),
    massageInput: new FormControl('', [Validators.required, Validators.minLength(5)]),
  });

  async sendMail(){
    let fd = new FormData();
    fd.append('name',this.name);
    fd.append('email',this.email);
    fd.append('massage',this.massage);
    try {
      await fetch('https://formspree.io/f/moqgevkd', { 
        method: 'POST', 
        body: fd, 
        mode: 'no-cors'
      });
      this.send = true;
      setTimeout(() =>{
        this.send = false;
      },1000)
    } catch (error) {
    }
  }

  checkDisabeld(){

  }
}
