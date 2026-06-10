import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FitflowApiService } from '../../services/fitflow-api.service';
import { Member } from '../../models/member.model';

@Component({
  selector: 'app-member-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  miembros: Member[] = [];

  constructor(private apiService: FitflowApiService) {}

  ngOnInit() {
    // Mandamos llamar a Flask en cuanto el componente cargue
    this.cargarMiembros();
  }

  cargarMiembros() {
    this.apiService.getMembers().subscribe({
      next: (datosDelBackend) => {
        this.miembros = datosDelBackend;
        console.log('Conexión exitosa. Datos de Flask:', datosDelBackend);
      },
      error: (error) => {
        console.error('Error al conectar con Flask. ¿El servidor está prendido?', error);
      }
    });
  }
}