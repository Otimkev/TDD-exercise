/* eslint-disable */
/**
 * PAIR PROGRAMMING BY:
 * OTIM KEVIN
 * MIKE REMBO
 */
const expect = require('chai').expect;
const fib = require('../fibonacci');


describe('FibonacciTest', function () {
 it('Should return the Nth element in the fibonacci sequence', function () {
   
   const fibonacciTerm = new fib();
   expect(fibonacciTerm.fibonacci(6)).to.equal(13);
   expect(fibonacciTerm.fibonacci(1)).to.equal(1);
   expect(fibonacciTerm.fibonacci(12)).to.equal(233);
    });
})