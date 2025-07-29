```
class Pet{
    constructor(name, age, color, gender){
        this.name=name;
        this.age=age;
        this.color=color;
        this.gender=gender;
    }
    eat(){
        console.log(`${this.name} is eating`);
    }
    run(){
        console.log(`${this.name} is running`);
    }
}

class Dog extends Pet{
    constructor(name, age, color, gender, sound, canHelp){
        super(name, age, color, gender);
        this.sound=sound;
        this.canHelp=canHelp;
    }
    sounds(){
        return this.sound;
    }
}
let mydog =  new Dog("gena", 2, "pink", "male", "barks", true);
console.log(`my dogs name is ${mydog.name}, his color is ${mydog.color}, he is ${mydog.age} years old, he is ${mydog.sounds()} all the time`);
```


