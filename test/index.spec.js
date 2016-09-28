const expect = require("chai").expect
const Optimus = require("../index")

describe("Optimus", function() {
  describe("::constructor", function() {
    it("should set an array on the object", function() {
      const numbers = [87, 42, 21]
      const optimus = new Optimus(numbers)
      expect(optimus.numbers).to.equal(numbers)
    })

    it("should throw if first arg is not an array", function() {
      expect(() => new Optimus()).to.throw(/must receive an array/)
      expect(() => new Optimus(4)).to.throw(/must receive an array/)
    })

    it("should throw if number is out of range", function() {
      expect(() => new Optimus([-1, 4])).to.throw(RangeError)
      expect(() => new Optimus([0])).to.throw(RangeError)
      expect(() => new Optimus([9, 1])).to.throw(RangeError)
    })

    it("should throw if array element is not an integer", function() {
      expect(() => new Optimus([4.2])).to.throw(TypeError)
      expect(() => new Optimus([2, "4"])).to.throw(TypeError)
    })
  })

  describe("#firstPrime", function() {
    it("should find the first prime", function() {
      const optimus = new Optimus([6, 7, 12])
      expect(optimus.firstPrime()).to.equal(7)
    })

    it("should return undefined if no prime is present", function() {
      const optimus = new Optimus([4, 6, 8])
      expect(optimus.firstPrime()).to.equal(undefined)
    })
  })

  describe("#areAllPrime", function() {
    it("should return true if all are prime", function() {
      const optimus = new Optimus([11, 7, 3, 2])
      expect(optimus.areAllPrime()).to.equal(true)
    })

    it("should return false if some are not prime", function() {
      const optimus = new Optimus([6, 5, 8])
      expect(optimus.areAllPrime()).to.equal(false)
    })
  })

  describe("#areSomePrime", function() {
    it("should return true if some are prime", function() {
      const optimus = new Optimus([6, 5, 8])
      expect(optimus.areSomePrime()).to.equal(true)
    })

    it("should return false if all are not prime", function() {
      const optimus = new Optimus([6, 4, 8])
      expect(optimus.areSomePrime()).to.equal(false)
    })
  })

  describe("#largestPrime", function() {
    it("should find the largest prime if present", function() {
      const optimus = new Optimus([11, 14, 13])
      expect(optimus.largestPrime()).to.equal(13)
    })

    it("should return undefined if no prime is present", function() {
      const optimus = new Optimus([14, 6, 9])
      expect(optimus.largestPrime()).to.equal(undefined)
    })
  })

  describe("#primes", function() {
    it("should filter out non primes", function() {
      const optimus = new Optimus([6, 11, 8, 13])
      expect(optimus.primes()).to.deep.equal([11, 13])
    })

    it("should return an empty array if no primes", function() {
      const optimus = new Optimus([6, 8, 16])
      expect(optimus.primes()).to.deep.equal([])
    })
  })
})
