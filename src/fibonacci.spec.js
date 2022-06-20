const file = process.argv.find((arg) => arg.match(/src\/fibonacci.*\.js/));

const { expect } = require("chai");
const Fibonacci = require(`../${
  file ? file.replace(/\.js/, "") : "src/fibonacci"
}`);

describe("fibonacci", () => {
  it("should encode fibonacci", () => {
    expect(Fibonacci.encode(1)).equals("11");
    expect(Fibonacci.encode(2)).equals("011");
    expect(Fibonacci.encode(3)).equals("0011");
    expect(Fibonacci.encode(4)).equals("1011");
    expect(Fibonacci.encode(5)).equals("00011");
    expect(Fibonacci.encode(6)).equals("10011");
    expect(Fibonacci.encode(7)).equals("01011");
    expect(Fibonacci.encode(8)).equals("000011");
    expect(Fibonacci.encode(9)).equals("100011");
    expect(Fibonacci.encode(10)).equals("010011");
    expect(Fibonacci.encode(25)).equals("10100011");
    expect(Fibonacci.encode(33)).equals("10101011");
    expect(Fibonacci.encode(89)).equals("00000000011");
    expect(Fibonacci.encode(54)).equals("010101011");
    expect(Fibonacci.encode("54")).equals(false);
    expect(Fibonacci.encode("54")).equals(false);
    expect(Fibonacci.encode(-1)).equals(false);
  });

  it("should decode fibonacci", () => {
    expect(Fibonacci.decode("11")).equals(1);
    expect(Fibonacci.decode("011")).equals(2);
    expect(Fibonacci.decode("0011")).equals(3);
    expect(Fibonacci.decode("1011")).equals(4);
    expect(Fibonacci.decode("00011")).equals(5);
    expect(Fibonacci.decode("10011")).equals(6);
    expect(Fibonacci.decode("01011")).equals(7);
    expect(Fibonacci.decode("000011")).equals(8);
    expect(Fibonacci.decode("100011")).equals(9);
    expect(Fibonacci.decode("010011")).equals(10);
    expect(Fibonacci.decode("10100011")).equals(25);
    expect(Fibonacci.decode("10101011")).equals(33);
    expect(Fibonacci.decode("00000000011")).equals(89);
    expect(Fibonacci.decode("010101011")).equals(54);
    expect(Fibonacci.decode("0109")).equals(false);
    expect(Fibonacci.decode('')).equals(false);
    expect(Fibonacci.decode(0101)).equals(false);
  });
});
