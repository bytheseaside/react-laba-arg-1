import backspace from "../helpers/backspace";
import isEmpty from "../helpers/isEmpty";
import resolve from "../helpers/resolve";
import compute from "../helpers/compute";

describe("Calculator HELPERS fn test", () => {
  test("should delete last character with backspace fn", () => {
    expect(backspace("String")).toMatch("Strin");
    expect(backspace("Test")).toMatch("Tes");
    expect(backspace("word")).toMatch("wor");
    expect(backspace("123")).toMatch("12");
    expect(backspace("String")).not.toMatch("String");
    expect(backspace("word")).not.toMatch("Wor");
    expect(backspace("word")).not.toMatch("WOR");
    expect(backspace("123")).not.toMatch("123");
    expect(backspace("123")).not.toMatch("13");
  });

  test("should return TRUE if string is empty with isEmpty fn", () => {
    expect(isEmpty("")).toBeTruthy();
    expect(isEmpty("d")).toBeFalsy();
    expect(isEmpty("2")).toBeFalsy();
  });
});

describe("Calculator COMPUTE fn test", () => {
  test("should SUM operations", () => {
    expect(compute("12", "+", "12")).toEqual(24);
    expect(compute("10", "+", "10")).toEqual(20);
    expect(compute("100", "+", "112")).toEqual(212);
    expect(compute("99", "+", "20")).toEqual(119);
  });

  test("should SUBSTRACT operations", () => {
    expect(compute("50", "-", "20")).toEqual(30);
    expect(compute("100", "-", "10")).toEqual(90);
    expect(compute("2000", "-", "500")).toEqual(1500);
    expect(compute("44", "-", "20")).toEqual(24);
  });

  test("should MULTIPLICATE operations", () => {
    expect(compute("12", "*", "3")).toEqual(36);
    expect(compute("100", "*", "10")).toEqual(1000);
    expect(compute("84", "*", "3")).toEqual(252);
    expect(compute("3", "*", "3")).toEqual(9);
  });

  test("should DIVIDE operations", () => {
    expect(compute("300", "/", "50")).toEqual(6);
    expect(compute("100", "/", "2")).toEqual(50);
    expect(compute("75", "/", "3")).toEqual(25);
    expect(compute("39", "/", "0")).toEqual("error");
  });

});

describe("Calculator RESOLVE fn test", () => {
  test("should resolve correct operation", () => {
    expect(resolve("10+10+2")).toEqual(22);
    expect(resolve("22+22")).toEqual(44);
    expect(resolve("50-33")).toEqual(17);
    expect(resolve("50/2")).toEqual(25);
    expect(resolve("120*2")).toEqual(240);
  });

  test("should resolve with only sign", () => {
    expect(resolve("+")).toEqual(0);
    expect(resolve("-")).toEqual(0);
    expect(resolve("*")).toEqual(0);
    expect(resolve("/")).toEqual("error");
  });

  test("should resolve with sign as first character", () => {
    expect(resolve("+10+10+2")).toEqual(22);
    expect(resolve("*22+22")).toEqual(22);
    expect(resolve("/50-33")).toEqual(-33);
    expect(resolve("+50/2")).toEqual(25);
    expect(resolve("-120*2")).toEqual(-240);
    expect(resolve("+10")).toEqual(10);
    expect(resolve("/10/20")).toEqual(0);
  });

  test("should resolve with sign as last character", () => {
    expect(resolve("10-")).toEqual(10);
    expect(resolve("20+")).toEqual(20);
    expect(resolve("10*")).toEqual(0);       //<<
    expect(resolve("10/")).toEqual("error"); //<<
    expect(resolve("10+20-")).toEqual(30);
    expect(resolve("10+20+")).toEqual(30);
    expect(resolve("10+20*")).toEqual(30); //<<glitch
    expect(resolve("10+20/")).toEqual(30); //<<glitch
  });

  test("should resolve with sign as first and last character", () => {
    expect(resolve("+10+10*")).toEqual(20); //<<glitch
    expect(resolve("+20+10/")).toEqual(30); //<<glitch
    expect(resolve("-20+10+")).toEqual(-10);
    expect(resolve("*10+10-")).toEqual(10); //prev resolution = 0
    expect(resolve("/10+10-")).toEqual(10); //prev resolution = 0
  });

  test("should resolve with previous resolution", () => {
    expect(resolve("-20+10+", 30)).toEqual(20);
    expect(resolve("+20+10+", 100)).toEqual(130);
    expect(resolve("10+", 30)).toEqual(30);
    expect(resolve("10-", 30)).toEqual(30);
    expect(resolve("-20", 130)).toEqual(110);
    expect(resolve("/20+10", 100)).toEqual(15);
    expect(resolve("*20+10", 2)).toEqual(50);
    expect(resolve("*2+10+", 100)).toEqual(110); //<<glitch
    expect(resolve("/20+10+", 100)).toEqual(110); //<<glitch
  });

  test("should resolve with percent", () => {
    expect(resolve("+10%", 100)).toEqual(110); 
    expect(resolve("40%", 100)).toEqual(40); 
    expect(resolve("*10%", 100)).toEqual(1000); 
    expect(resolve("-10%", 100)).toEqual(90); 
    expect(resolve("/20%", 100)).toEqual(5); 
    expect(resolve("+50+10%", 100)).toEqual(165); 
    expect(resolve("-50+10%", 100)).toEqual(55); 
    expect(resolve("/10+10%", 100)).toEqual(11); 
    expect(resolve("*2+10%", 100)).toEqual(220); 
  });
});
