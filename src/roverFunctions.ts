import { Plateau, Rover, Orientation } from "../src/types";

export function createPlateau(width: number, height: number): Plateau {
  return {
    width,
    height
  };
}

export function createRover(plateau: Plateau, x: number, y: number, orientation: Orientation): Rover {
  if (x < 0 || x > plateau.width || y < 0 || y > plateau.height) {
    throw new Error("Rover position is outside the plateau.");
  }
  return {
    position: [x, y],
    orientation,
    plateau
  };
}
//////////////////////////////////////// now movement of rover

export function moveRover(rover: Rover): Rover {
  if (rover.orientation !== 'N') {
    throw new Error("Rover can only move north for now");
  }

  const newX = rover.position[0];
  const newY = rover.position[1] + 1; // Move one step to the north

  // Check if new Y coordinate is within plateau bounds
  if (newY > rover.plateau.height) {
    throw new Error("Cannot move off plateau");
  }

  return {
    ...rover,
    position: [newX, newY], // Update position
  };
}
//////////////////////////////////////// now movement in other directions
