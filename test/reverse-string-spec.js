const { assert } = require("chai");
const chai = require("chai");
const { reverseString } = require('../problems/reverse-string.js');
const expect = chai.expect;

describe("reverseString(input)", () => {
    it("reverses the string", () => {
      //Arrange
      let test = "fun";

      let result = reverseString(test);

      //Act

      //Assert
      expect(result).to.equal("nuf");
    });
    it("tests if input is not a string", () => {
        const test = function () {
            reverseString(1);
        }
        expect(test).to.throw(Error);
    })
  });
