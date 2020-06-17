/* eslint-disable */
/**
 * PAIR PROGRAMMING BY:
 * OTIM KEVIN
 * MIKE REMBO
 */

const expect = require('chai').expect;
const factorial = require('../index.js');
const fib = require('../fibonacci');

describe('FactorialTest', function () {
 it('Should return the factorial of the given number', function () {
    
        const Factorial = new factorial();
        
        expect(Factorial.calFactorial(4)).to.equal(24)
        expect(Factorial.calFactorial(2)).to.equal(2)
        expect(Factorial.calFactorial(3)).to.equal(6)
        expect(Factorial.calFactorial(4)).to.equal(24)
        expect(Factorial.calFactorial(5)).to.equal(120)
    });
});




   


