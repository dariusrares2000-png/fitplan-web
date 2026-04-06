export interface User {
  uid: string;
  email: string | null;
}

export interface Exercise {
  id: number;
  name: string;
  description: string;
  muscleGroup: string;
}

export interface Recipe {
  id: number;
  title: string;
  ingredients: string[];
  calories: number;
  macros: string;
  preparationTime: string;
}