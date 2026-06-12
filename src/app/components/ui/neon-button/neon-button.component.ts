import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-neon-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      [type]="type"
      [disabled]="disabled"
      [class]="color === 'red' ? 'btn-neon-danger' : 'btn-neon'"
      (click)="onClick()">
      <ng-content></ng-content> 
    </button>
  `
})
export class NeonButtonComponent {
  @Input() type: 'button' | 'submit' = 'button';
  @Input() color: 'green' | 'red' = 'green';
  @Input() disabled = false;
  @Output() accion = new EventEmitter<void>();

  onClick() {
    this.accion.emit();
  }
}