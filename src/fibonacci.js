

class Fibonacci {

  fibonacci(number) {
    if (number < 2) {
      return number;
    } else {
      return this.fibonacci(number - 1) + this.fibonacci(number - 2);
    }
  }

  encode(number) {

    if (typeof number !== 'number') {
      console.warn('You need to pass a number')

      return false;
    }

    if (number < 0) {
      console.warn('You need to pass number that is above 0')

      return false;
    }

    const encodeToString = (numberInSequence, numbersInArray) => {
      const value = this.fibonacci(numberInSequence);

      // The value is above the number.
      if (value > number) {
        // There are two 1 1 in the array. We can remove one.
        numbersInArray.shift();
        let total = 0;

        const listOfCodes =  [...numbersInArray.reverse()].map((numberInSequence, i) => {
          if (!i || numberInSequence + total <= number) {
            total += numberInSequence;
            return '1';
          }

          return '0';
        })
        return listOfCodes.reverse().join('');
      } else if (value === number) {
        return numbersInArray
          .map((_, index) => index === 0 ? '1' : '0')
          .reverse().join('') || '1';
      }

      return encodeToString(numberInSequence + 1, [...numbersInArray, value]);
    }

    return encodeToString(1, []) + '1';
  }

  decode(string) {
    if (typeof string !== 'string') {
      console.warn('You need to use a string as a parameter')
      return false;
    }

    if (!string.length) {
      console.warn('You need to pass something')

      return false;
    }

    if (!string.match(/^[0-1]+$/)) {
      console.warn('You can only use 1 and 0 in the string');
      return false;
    }

    // Lets remove the last 1 inside of the string.
    const modifiedString = string.slice(0, -1);
    let total = 0;

    const amount = modifiedString.length;
    const contentArray = modifiedString.split('');

    // Fibonacci sequence starts like this
    // 0 1 1 2 3 ...
    // Lets jump over the two first so we get
    // 1 2 3 ... directly
    const skip = 2;
    for (let i = skip; i <= amount + 1; i++) {

      // This means we have to go back two indexes to find the correct one.
      if (Number(contentArray[i - skip])) {
        total += this.fibonacci(i);
      }
    }
    
    return total;
  }
}

module.exports = new Fibonacci();
