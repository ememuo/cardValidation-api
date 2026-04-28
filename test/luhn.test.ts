import { luhnCheck } from "../luhn";

describe("luhnCheck", () => {
  // Valid card numbers
  it("should return true for a valid card number", () => {
    expect(luhnCheck("4539578763621486")).toBe(true);
  });

  it("should return true for another valid card number", () => {
    expect(luhnCheck("79927398713")).toBe(true);
  });

  // Invalid card numbers
  it("should return false for an invalid card number", () => {
    expect(luhnCheck("1234567890123456")).toBe(false);
  });

  // Edge cases
  it("should return false for a number that is too short", () => {
    expect(luhnCheck("123456")).toBe(false);
  });

  it("should return false for a number that is too long", () => {
    expect(luhnCheck("123456789012345678901")).toBe(false);
  });

  it("should strip spaces and still validate correctly", () => {
    expect(luhnCheck("4539 5787 6362 1486")).toBe(true);
  });

  it("should return false for an empty string", () => {
    expect(luhnCheck("")).toBe(false);
  });
});
