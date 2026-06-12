import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
  
  // Este evento "grita" hacia afuera qué miembro queremos editar
  @Output() editarMiembro = new EventEmitter<Member>(); 

  constructor(private apiService: FitflowApiService) {}

  ngOnInit() {
    this.cargarMiembros();
  }

  // READ 
  cargarMiembros() {
    this.apiService.getMembers().subscribe({
      next: (datos) => this.miembros = datos,
      error: (err) => console.error(err)
    });
  }
//DELETE
  borrarMiembro(id: number | undefined) {
    if (id && confirm('⚡ ¿Estás seguro de eliminar a este miembro de FitFlow?')) {
      this.apiService.deleteMember(id).subscribe({
        next: () => this.cargarMiembros(), // Recarga la tabla mágicamente
        error: (err) => console.error('Error al borrar', err)
      });
    }
  }
}
