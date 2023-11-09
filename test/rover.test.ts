import { createRover, moveRover, createPlateau } from "../src/roverFunctions";
import { Orientation } from "../src/types";

describe("Mars Rover", () => {
  describe("Plateau", () => {
    test("should be created with specified bounds", () => {
      const width = 5;
      const height = 5;
      const plateau = createPlateau(width, height);
      expect(plateau.width).toBe(width);
      expect(plateau.height).toBe(height);
    });
  });

  describe("Rover", () => {
    test("should be created with initial position and orientation on the plateau", () => {
      const plateau = createPlateau(5, 5);
      const x = 1;
      const y = 2;
      const orientation: Orientation = 'N';
      const rover = createRover(plateau, x, y, orientation);
      expect(rover.position).toEqual([x, y]);
      expect(rover.orientation).toBe(orientation);
    });

    test("should throw an error if created outside the plateau bounds", () => {
      const plateau = createPlateau(5, 5);
      const x = -1;
      const y = 6;
      const orientation: Orientation = 'N';
      expect(() => {
        createRover(plateau, x, y, orientation);
      }).toThrow("Rover position is outside the plateau.");
    });
  });
});

describe("Rover Straight Movement", () => {
    test("rover moves one step north", () => {
      // Arrange
      const plateau = createPlateau(5, 5);
      const initialX = 1;
      const initialY = 2;
      const orientation: Orientation = 'N';
      const rover = createRover(plateau, initialX, initialY, orientation);
  
      // Act
      const newPosition = moveRover(rover);
  
      // Assert
      const expectedY = initialY + 1; // Since moving north increases the Y coordinate
      expect(newPosition.position).toEqual([initialX, expectedY]);
      expect(newPosition.orientation).toBe('N');
    });
  });
  
