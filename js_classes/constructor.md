### js-de class - bu taze obyektleri tayyarlamak uchin template (shablon).
##
```
class Person {
  constructor(name, age) {
      this.name = name;
      this.age = age;
  }

  greet() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

const person1 = new Person("Mohi", 25);
const person2 = new Person("Maya", 24);
const person3 = new Person("Noo", 24);

console.log(person1.greet());
console.log(person2.greet());
console.log(person3.greet());
```
##
### *constructor* bu obyektin bahalaryny automatiki yagdayda inisializasiya edyan funksiya.  argument hokmunde inisializasiya etmeli bahalary kabul edyar we obyekte gechiryar
##
### *new* yokarky Person klasynyn taze bir obyektini doretmek uchin ulanylyar. 
### shu mysalda biz yokarky shablon boyuncha 3 sany taze person doretdik
### her sapar taze obyekti doredenimizde *new* sozuni we onun yz yanyndan arasynda boshluk goyup klasyn adyny bash harp bn yazmaly.
