/*
  The Euclidean Algorithm for finding greatest common denominator between 2 numbers:
  Usage: node euclidsGCD.js <NUMBER_A> <NUMBER_B>
  Example: node euclidsGCD.js 270 192
*/
const euclideanAlgorithmForGCD = (numberA, numberB) => {
  // If A = 0 then GCD(A,B)=B, since the GCD(0,B)=B, and we can stop.
  // If B = 0 then GCD(A,B)=A, since the GCD(A,0)=A, and we can stop.
  if (numberA === 0) {
    return numberB;
  } else if (numberB === 0) {
    return numberA;
  }

  // Get the modulus between numbers A and B
  const module = numberA % numberB;

  // Find GCD(B,R) using the Euclidean Algorithm since GCD(A,B) = GCD(B,R)
  return euclideanAlgorithmForGCD(numberB, module);
};

const [numberA, numberB] = process.argv.slice(2);

console.log(euclideanAlgorithmForGCD(numberA, numberB))
