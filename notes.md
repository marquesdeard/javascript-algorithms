# JavaScript Algorithms and Data Structures Notes

## Asymptotic Notations

- Time Complexity : Amount of time taken by an algorithm to run, as a function of input size
- Space Complexity : Amount of memory taken by an algorithm to run , as a function of input size

## Asymptotic Notations

- Big-O Notation (O-notation) - Worst case complexity
- Omega Notation (Ω-notation) - Best case complexity
- Theta Notation (θ-notation) - Avarage case complexity

### Big-O Notation

The worst case complexity of an algorithm is representing using the Big-O Notation
Big-O Notation describes the complexity of an algorithm using algebraic terms

It Has two important characteristics

- It is expressed in terms of the input
- It focused on the bigger picture withour getting cought up in the minute details

#### Big-O Guide

Calculation not dependent on input size - O(1)

- Loop - O(n)
- Nested Loops - O(n²)
- Input size reduced by half - O(logn)

#### Object - Big-O

An object is a collection of key value pairs

- Insert - O(1)
- Remove - O(1)
- Access - O(1)
- Access - O(n) Linear
- Object.keys() - O(n) Linear
- Object.values() - O(n) Linear
- Object.entries() - O(n) Linear

#### Array - Big-O

An array is an ordered collection of values

- Insert / Remove at end - O(1)
- Insert / Remove at beginning - O(n)
- Access - O(1)
- Search - O(n)
- Push / pop - O(1)
- Shift - unshift / concat / slice / splice - O(n)
- forEach / map / filter / reduce - O(n)

### Space Complexity

- O(1) - Constant
- O(n) - Linear
- O(logn) - Logarithmic

### Math Algorithms

- Fibonacci sequence
- Factorial of a number
- Prime number
- Power of two
- Recursion
- Fibonacci sequence with recursion
- Factorial of a number with recursion

#### Fibonacci Sequence

In mathematics, the fibonacci sequence is a sequence in which each number is the sum of the two preceding ones.

fibonacci(2) = [0,1]
fibonacci(3) = [0,1,1]

#### Factorial of a number

In mathematics, the factorial of a non-negative integer "n", denoted n!, is the product of all positive integers less than or equal to n

factorial of zero is 1
factorial(4) = 4*3*2\*1 = 24

#### Prime Number

A prime number is a natural number greater than 1 that is not a product of two natural numbers

##### Optimized Primality Test

Integers larger than the square root do not need to be checked because whenever "n=a\*b", one of the two factors "a" and "b" is less than or equal to the square root of "n"

n = 24, a = 4 and b = 6
The square root of 24 is 4.89
4 is less than 4.89

### Recursion

Recursion is a problem solving technique where the solition depends on solitions to smaller instances of the same problem
