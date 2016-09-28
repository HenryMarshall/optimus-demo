class Optimus {
  constructor(numbers) {
    this.numbers = numbers
    this._validateInput()
  }

  firstPrime() {
    return this.numbers.find(num => this._isPrime(num))
  }

  areAllPrime() {
    return this.numbers.every(num => this._isPrime(num))
  }

  areSomePrime() {
    return this.numbers.some(num => this._isPrime(num))
  }

  largestPrime() {
    // const largest = this.numbers.reduce((acc, num) => {
    //   return (this._isPrime(num) && num > acc) ? num : acc
    // }, 0)

    // return largest || undefined

    const primes = this.primes()
    return primes.length ? Math.max(...primes) : undefined
  }

  primes() {
    return this.numbers.filter(num => this._isPrime(num))
  }

  _isPrime(num) {
    const minFactor = 2
    const maxFactor = Math.floor(Math.sqrt(num))

    for (let ii = minFactor; ii <= maxFactor; ii++) {
      if (num % ii === 0) {
        return false
      }
    }
    return true
  }

  _validateInput() {
    if (!this.numbers || !Array.isArray(this.numbers)) {
      throw new Error("Constructor must receive an array")
    }

    this.numbers.forEach(num => {
      if (num < 2) {
        throw new RangeError(`Primes must be 2 or greater: ${num}`)
      }
      if (!Number.isInteger(num)) {
        throw new TypeError(`Primes must be integers: ${num}`)
      }
    })
  }
}

module.exports = Optimus
