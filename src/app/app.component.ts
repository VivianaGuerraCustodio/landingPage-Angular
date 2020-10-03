import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reto-Angular6';
  menu = [{
    'Reserva de Salas': {
      visible: true,
    },
    'Reporte de problemas': {
      visible: true,
    },
    'Mi equipo': {
      visible: true,
    },
    'Comunicados': {
      visible: true,
    },
    'Ficha de síntomatología': {
      visible: true,
    },

  }]
}
