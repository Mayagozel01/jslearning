// there are 4 types of scopes:
// Global
let globalVar = 'I am global';
// functional or local
function myFunc() {
    let localVar = 'I am local';
  }
// block scope
if (true) {
    let blockVar = 'I am block-scoped';
  }
// lexical scope:Nested functions have access to variables declared in their outer scope
function outer() {
    let outerVar = 'Outer';
    
    function inner() {
      console.log(outerVar); // Can access outerVar
    }
  }