import { Component } from '@angular/core';

@Component({
  selector: 'app-whatsapp-button',
  standalone: true,
  imports: [],
  templateUrl: './whatsapp-button.component.html',
  styleUrl: './whatsapp-button.component.scss'
})
export class WhatsappButtonComponent {
  /** WhatsApp-Chat mit +49 173 2187619 (ohne vorausgefüllten Text). */
  readonly whatsappUrl = 'https://wa.me/491732187619';
}
