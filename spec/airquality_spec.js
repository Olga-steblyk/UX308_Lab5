import { airqualityindex } from '../airquality.js'

describe("A suite", function() {
    it("contains spec with an expectation", function() {
      let result = airqualityindex(77);
      expect(result).toBe("Your input of 77 is Moderate");
    });
  });

  describe("A suite", function() {
    it("contains spec with an expectation", function() {
      let result = airqualityindex(179);
      expect(result).toBe("Your input of 179 is Unhealthy");
    });
  });

  describe("A suite", function() {
    it("contains spec with an expectation", function() {
      let result = airqualityindex(231);
      expect(result).toBe("Your input of 231 is Unhealthy");
    });
  });
  
  