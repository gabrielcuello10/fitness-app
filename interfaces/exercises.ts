export interface IExercises {
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  id: string;
  instructions: string[];
  name: string;
  secondaryMuscles: string[];
  target: string;
}

export interface IExercise {
  id: number;
  name: string;
  gifUrl: string;
}
