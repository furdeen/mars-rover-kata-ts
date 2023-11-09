//import { number } from "yargs";

export type Orientation = 'N' | 'E' | 'S' | 'W';
export type Position = [number, number]; // [x, y]
export interface Rover {
  position: Position;
  orientation: Orientation;
  plateau: Plateau;
}
export interface Plateau {
  width: number;
  height: number;
}