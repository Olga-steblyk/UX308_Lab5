//slopecal
import { slopecal } from '../slope.js'

describe("A suite", function() {
    it("contains spec with an expectation", function() {
      let slope = slopecal(1 , 1, 2, 3);
      expect(slope.toFixed(2)).toBe('2.00');
    });
  });
  
  describe("A suite", function() {
    it("contains spec with an expectation", function() {
      let slope = slopecal(1 , 1, 0, 0);
      expect(slope.toFixed(2)).toBe('1.00');
    });
  });

  describe("A suite", function() {
    it("contains spec with an expectation", function() {
      let slope = slopecal(1 , 3, 0, 1.5);
      expect(slope.toFixed(2)).toBe('1.50');
    });
  });