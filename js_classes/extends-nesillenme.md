### extends js
### ashakdaky kodda  ozunde menzesh metody we obyektleri saklayan klasslar doredilen
```
class Cat{
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  eat(){
    return `${this.name} is eating`;
  }
  meaw(){
    return `${this.name} says: MEOOOOW`;
  }
}

class Dog{
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  eat(){
    return `${this.name} is eating`;
  }

  bark(){
    return `${this.name} says: WOOWF`;

  }
}

const monti = new Cat('Monti', 5);
const tom = new Dog("Tom", 2);

console.log(monti.eat());
// Monti is eating

console.log(tom.eat());
// Tom is eating


console.log(monti.meaw());
// Monti says: MEOOOOW


console.log(tom.bark());
// Tom says: WOOWF

```
*eat()* metody we *name age* keyler iki klasda hem bar. shular yaly yagdaylarda kody owadanlamak we azaltmak (sugar syntax) uchin 
**extends** (nesillenme ulanylyar).
##
taze Pet klasyny doredelin we onun ichine Cat we Dog klaslaryn ikisine hem degishli bolan metodlary we obyektleri gechirelin
```
class Pet {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  eat(){
    return `${this.name} is eating`;
  }
}
```
###
Inni Cat we Dog klaslarynyn Pet klasyndan nesillenyandigini **extends** sozunin komegi bn gorkezelin. 
```
class Cat extends Pet{

  meaw(){
    return `${this.name} says: MEOOOOW`;
  }
}

class Dog extends Pet{

  bark(){
    return `${this.name} says: WOOWF`;

  }
}
```
###
console-da yene onki netijeleri gorup bileris
```
const monti = new Cat('Monti', 5);
const tom = new Dog("Tom", 2);

console.log(monti.eat());
// Monti is eating

console.log(tom.eat());
// Tom is eating


console.log(monti.meaw());
// Monti says: MEOOOOW
```
