import { Component } from '@angular/core';
import { Reserva } from 'src/app/models/reserva';
import { ReservaService } from 'src/app/services/reserva.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  list: Reserva[] = [];

  constructor(private service: ReservaService) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void {
    this.service.findAll().subscribe((response) => {
      this.list = response;
    });
  }
}
