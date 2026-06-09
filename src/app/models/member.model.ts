export interface Member {
  id?: number;
  nombre: string;
  email: string;
  plan: string; // 'Básico', 'Premium'
  estado: string; // 'Activo', 'Inactivo'
}