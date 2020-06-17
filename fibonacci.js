/* eslint-disable */
/**
 * PAIR PROGRAMMING BY:
 * OTIM KEVIN
 * MIKE REMBO
 */

class Fibonacci{
 fibonacci(n){
  if(isNaN(n)) return console.log('invalid input!')
  if(n==1) return n;
  if(n==2) return n;
  if(n>2) return (this.fibonacci(n-1) + this.fibonacci(n-2));
 
 }

}

module.exports = Fibonacci;



 

 


 




