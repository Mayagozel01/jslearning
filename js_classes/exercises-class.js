// 2. Класс Rectangle. Принимает width и height. Добавь метод area, возвращающий площадь.

class Rectangle{
    constructor(a,b){
        this.a = a;
        this.b = b;
    }
    area(){
        return this.a*this.b;
    }
}

class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      return `Hi, my name is ${this.name} and I'm ${this.age} years old.`;
    }
  }
  

const rect = new Rectangle(5, 10);
console.log(rect.area()); // 50
// 3. Создай класс Student, который наследует Person. Добавь свойство grade. Переопредели метод greet для студента.
class Student extends Person {
    constructor(name, age, grade) {
      super(name, age); // вызываем конструктор родителя
      this.grade = grade;
    }
  
    greet() {
      return `Hi, I'm ${this.name}, ${this.age} years old, and my grade is ${this.grade}.`;
    }
  }
  
  const student = new Student('Anna', 20, 'A');
  console.log(student.greet());