import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-member-form',
  standalone: true,
  imports: [CommonModule],
  template: `<p style="color: var(--neon-green)">Aquí irá el formulario</p>`
})
export class MemberFormComponent {}