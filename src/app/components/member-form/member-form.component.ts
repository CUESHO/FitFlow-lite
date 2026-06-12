import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FitflowApiService } from '../../services/fitflow-api.service';
import { Member } from '../../models/member.model';

// 1. Aquí le decimos a TypeScript en qué carpeta están tus nuevos componentes UI
import { NeonInputComponent } from '../ui/neon-input/neon-input.component';
import { NeonButtonComponent } from '../ui/neon-button/neon-button.component';

@Component({
  selector: 'app-member-form',
  standalone: true,
  // 2. Y AQUÍ es donde va el arreglo de imports, adentro del decorador @Component
  imports: [CommonModule, FormsModule, NeonInputComponent, NeonButtonComponent],
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css']
})
export class MemberFormComponent implements OnInit {
  // Recibe los datos desde app.component
  @Input() miembroAEditar: Member | null = null; 
  // Evento Hijo
  @Output() volver = new EventEmitter<void>();

  nuevoMiembro: Member = { nombre: '', email: '', plan: 'Básico', estado: 'Activo' };
  esEdicion = false;

  constructor(private apiService: FitflowApiService) {}

  ngOnInit() {
    // Si entró un miembro a editar, rellenamos el formulario
    if (this.miembroAEditar) {
      this.nuevoMiembro = { ...this.miembroAEditar }; // Clonamos para no editar en vivo
      this.esEdicion = true;
    }
  }

  guardarMiembro() {
    if (this.esEdicion && this.nuevoMiembro.id) {
      // UPDATE: Petición PUT
      this.apiService.updateMember(this.nuevoMiembro.id, this.nuevoMiembro).subscribe({
        next: () => this.volver.emit(),
        error: (err) => console.error(err)
      });
    } else {
      // CREATE: Petición POST
      this.apiService.createMember(this.nuevoMiembro).subscribe({
        next: () => this.volver.emit(),
        error: (err) => console.error(err)
      });
    }
  }

  cancelar() {
    this.volver.emit(); // Cuando el usuario da clic en cancelar o guardar
  }
}