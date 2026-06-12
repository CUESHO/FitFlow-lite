import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-neon-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="form-group" style="display: flex; flex-direction: column; margin-bottom: 15px;">
      <label style="color: var(--neon-green); margin-bottom: 8px; font-weight: 600;">{{ label }}</label>
      <input
        [type]="type"
        class="neon-input"
        [placeholder]="placeholder"
        [ngModel]="valor"
        (ngModelChange)="valorChange.emit($event)"
        style="background: #2a2a2a; border: 1px solid #444; color: white; padding: 12px; border-radius: 5px; outline: none;">
    </div>
  `
})
export class NeonInputComponent {
  @Input() label = '';
  @Input() type = 'text';
  @Input() placeholder = '';
  @Input() valor: any = ''; // Recibe el dato del padre
  @Output() valorChange = new EventEmitter<any>(); // Le avisa al padre si el usuario escribe
}