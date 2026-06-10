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
  vistaActual: 'lista' | 'formulario' = 'lista';
  
  // Aquí guardamos temporalmente el miembro si le dimos click a "Editar"
  miembroSeleccionado: any = null; 

  cambiarVista(vista: 'lista' | 'formulario', miembro: any = null) {
    this.miembroSeleccionado = miembro; // Guardamos los datos (o null si es uno nuevo)
    this.vistaActual = vista;
  }
}