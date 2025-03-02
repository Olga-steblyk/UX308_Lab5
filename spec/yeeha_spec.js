import { yeeha } from '../yeeha.js'

describe("A suite", function() {
    it("contains spec with an expectation", function() {
      let cal = yeeha(21);
      expect(cal).toBe("Yee Ha");
    });
  });
  
  describe("A suite", function() {
    it("contains spec with an expectation", function() {
      let cal = yeeha(15);
      expect(cal).toBe("Yee");
    });
  });

  describe("A suite", function() {
    it("contains spec with an expectation", function() {
      let cal = yeeha(14);
      expect(cal).toBe("Ha");
    });
  });
  
  describe("A suite", function() {
    it("contains spec with an expectation", function() {
      let cal = yeeha(11);
      expect(cal).toBe("Nada");
    });
  });