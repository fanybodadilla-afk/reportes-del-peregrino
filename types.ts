
export enum ReportCategory {
  INCIDENT = 'Incidente',
  SHELTER_FULL = 'Albergue Lleno',
  SHELTER_EMPTY = 'Albergue Vacío',
  FOOD_FULL = 'Comida Saturado',
  FOOD_EMPTY = 'Comida Disponible',
  REST_AREA = 'Zona de Descanso',
  HYDRATION = 'Punto de Hidratación',
  TOURIST_SITE = 'Sitio Turístico',
  ALT_ROUTE = 'Ruta Alterna',
  OTHER = 'Otro'
}

export interface Report {
  id: number;
  category: ReportCategory;
  comment: string;
  photo: string | null; // URL of the photo
  timestamp: Date;
  isOwn?: boolean;
}

export interface Contact {
  name: string;
  phone: string;
  description: string;
}