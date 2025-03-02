import { sqft2acre } from '../sqft2acre.js'

describe("Testing sqft2acre with 43560", function() {
    it("converting sqft 2 acres", function() {
      let acre = sqft2acre(43560);
      expect(acre.toFixed(2)).toBe("1.00");
    });
  });
  
  describe("Testing sqft2acre", function() {
    it("converting sqft 2 acres with number 77889 sqft", function() {
      let acre = sqft2acre(77889);
      expect(acre.toFixed(2)).toBe("1.79");
    });
  });

  describe("Testing sqft2acre", function() {
    it("converting sqft 2 acres", function() {
      let acre = sqft2acre(33221);
      expect(acre.toFixed(2)).toBe("0.76");
    });
  });