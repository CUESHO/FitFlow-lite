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
    // Datos de prueba para que Abel vea el diseño hoy. 
    this.miembros = [
      { id: 1, nombre: 'Usuario Prueba', email: 'test@fitflow.com', plan: 'Premium', estado: 'Activo' },
      { id: 2, nombre: 'Cliente Básico', email: 'basico@fitflow.com', plan: 'Básico', estado: 'Inactivo' }
    ];
  }
}