/* eslint-disable */
/**
 * PAIR PROGRAMMING BY:
 * OTIM KEVIN
 * MIKE REMBO
 */
class Factorial{
  calFactorial(n){
    if(isNaN(n)) return console.log('invalid input!')
    if (n == 0 || n == 1){
      return 1;
    } return n*(this.calFactorial(n-1))  
  }
 }

module.exports = Factorial;