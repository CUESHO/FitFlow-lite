import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberListComponent } from './components/member-list/member-list.component';
import { MemberFormComponent } from './components/member-form/member-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MemberListComponent, MemberFormComponent], // <-- Revisa esto
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'FitFlow Lite - Gestión';
  vistaActual: 'lista' | 'formulario' = 'lista'; // Controlador de vistas

  cambiarVista(vista: 'lista' | 'formulario') {
    this.vistaActual = vista;
  }
}