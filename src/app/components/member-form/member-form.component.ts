import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // <-- Clave para usar formularios
import { FitflowApiService } from '../../services/fitflow-api.service';
import { Member } from '../../models/member.model';

@Component({
  selector: 'app-member-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './member-form.component.html', // Regresamos al HTML externo
  styleUrls: ['./member-form.component.css']   // Regresamos al CSS externo
})
export class MemberFormComponent {
  // Este evento le avisa al app.component que ya terminamos aquí
  @Output() volver = new EventEmitter<void>();

  nuevoMiembro: Member = {
    nombre: '',
    email: '',
    plan: 'Básico',
    estado: 'Activo'
  };

  constructor(private apiService: FitflowApiService) {}

  guardarMiembro() {
    this.apiService.createMember(this.nuevoMiembro).subscribe({
      next: (res) => {
        console.log('Guardado en Flask:', res);
        this.volver.emit(); // Regresa a la tabla automáticamente
      },
      error: (err) => console.error('Error al guardar', err)
    });
  }

  cancelar() {
    this.volver.emit(); // Regresa a la tabla sin guardar nada
  }
}