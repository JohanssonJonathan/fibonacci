# Fibonacci code test

Implementera en decoder och encoder för binära fibonacci tal.
Exempel på hur det fungerar finnes i länkarna nedan.

## Fibonacci

_https://en.wikipedia.org/wiki/Fibonacci_coding_

_https://en.wikipedia.org/wiki/Fibonacci_number_

Tänk att värdena i talserien ser ut såhär.

1 2 3 5 8 13 21 etc...

Detta gör att tex:

- 001 = 3 (0 + 0 + 3)
- 1001 = 6 (1 + 0 + 0 + 5)
- 010001 = 15 (0 + 2 + 0 + 0 + 0 + 13)

Talet ska alltid avslutas med 11, dvs en extra 1'a ligger som padding, så talen ovan kommer i verkligheten se ut såhär.

- 0011 = 3
- 10011 = 6
- 0100011 = 15

Du ska implementera en encoder och en decoder, jag har satt upp ett par tester som du kan använda för att se om koden fungerar som du tänkt dig, samt en fil med skeletet av funktionerna där du ska göra din implementation. För att köra allt behöver du:

1. Installera NodeJS (https://nodejs.org/en/) och Yarn (https://yarnpkg.com/)
2. kör 'yarn install'
3. Implementera funktionerna encode & decode i 'src/fibonacci.js'
4. kör 'yarn test:watch'
