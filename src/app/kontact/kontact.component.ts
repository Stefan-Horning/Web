import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-kontact',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,FormsModule,RouterLink],
  templateUrl: './kontact.component.html',
  styleUrl: './kontact.component.scss'
})
export class KontactComponent {
  send:boolean = false;
  name:any;
  email:any;
  phone:any;
  message:any;
  contactForm = new FormGroup({
    nameInput: new FormControl('', [Validators.required, Validators.minLength(2)]),
    emailInput: new FormControl('', [Validators.required, Validators.email, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.(de|com|net|nl|org|uk|cn|au|dk|pl|cz|at|lu|ru)$')]),
    messageInput: new FormControl('', [Validators.required, Validators.minLength(5)]),
    phoneInput: new FormControl('', [
      Validators.required,
      Validators.minLength(8), // Mindestlänge auf 8 Zeichen reduziert
      Validators.maxLength(15), // Maximallänge hinzugefügt, um die Eingabe zu begrenzen
      Validators.pattern('^[0-9\\-\\s]+$') // Erlaubt Zahlen, Bindestriche und Leerzeichen
    ]),
    termsInput: new FormControl(false, [Validators.requiredTrue]) 
  });


  http = inject(HttpClient)

  post = {
    endPoint: 'https://swetlana-makeupartist.de/Mailer/sendMailStefan.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'application/json',
        responseType: 'text' as const
      },
    },
  };

  async sendMail() {
    let contactData = {
      name: this.contactForm.get('nameInput')?.value,
      email: this.contactForm.get('emailInput')?.value,
      message: this.contactForm.get('messageInput')?.value,
      phone: this.contactForm.get('phoneInput')?.value
    };
    this.http.post(this.post.endPoint, this.post.body(contactData), { responseType: 'text' })
        .subscribe({
          next: (response) => {
            console.log(response);  // Ausgabe der Antwort zur Überprüfung
            this.contactForm.reset();
            this.send = true;
            setTimeout(() => {
              this.send = false;
            }, 25000);
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
  }

  checkDisabeld(){

  }
}
