import { lawncutting } from '../lawncutting.js'

describe("Testing lawncutting", function() {
    it("converting dimentions and speed to calculate lawn cutting in min", function() {
      let min = lawncutting(7, 8, 10);
      expect(min.toFixed(2)).toBe("5.60");
    });
  });

  describe("Testing lawncutting", function() {
    it("converting dimentions and speed to calculate lawn cutting in min", function() {
      let min = lawncutting(5, 5, 5);
      expect(min.toFixed(2)).toBe("5.00");
    });
  });

  
  describe("Testing lawncutting", function() {
    it("converting dimentions and speed to calculate lawn cutting in min", function() {
      let min = lawncutting(3, 9, 12);
      expect(min.toFixed(2)).toBe("2.25");
    });
  });