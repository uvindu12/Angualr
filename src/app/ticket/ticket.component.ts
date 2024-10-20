import { Component } from '@angular/core';
import { TicketService } from '../services/ticket.service';

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.css']
})
export class TicketFormComponent {
  totalTickets: number;
  releaseRate: number;

  constructor(private ticketService: TicketService) {}

  submitTicketDetails() {
    this.ticketService.createTickets(this.totalTickets, this.releaseRate).subscribe(
      response => console.log('Tickets created!', response),
      error => console.error('Error:', error)
    );
  }
}
