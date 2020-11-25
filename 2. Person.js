class Person {
    constructor(firstName,lastName,age,email) {
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
        this.email=email;
    }
    
    toString() {
//        return 'to String - test';
        return this.firstName+' '+this.lastName+' (age: '+this.age+', email: '+this.email+')';
    }
    valueOf() {
//        return 'value Of - test';
        return this.firstName+' '+this.lastName+' (age: '+this.age+', email: '+this.email+')';
    }
    
}

/*
var log = console.log;
console.log = function() {
    var args = Array.from(arguments);

    if(typeof(args[0])==Person) {
        log.apply(console,['test']);

    }
    else {
        log.apply(console,args);
    }
}

/*
Person.prototype.toString = function() {
    return 'prototype to String - test';
}
*/
/*
Person.__proto__.prototype.valueOf = function() {
    return 'prototype value Of - test';
}
/*
Person.__proto__.toString = function() {
    return '__proto__ to String - test';
}
Person.__proto__.valueOf = function() {
    return '__proto__ value Of - test';
}

/*
Person.prototype.toString = function() {
    return 'to String - test';
}

Person.prototype.valueOf = function() {
    return 'value Of - test';
}
*/

let person=new Person('Maria', 'Petterson', 22, 'mp@gmail.com');

console.log('my method: '+person.toString());
console.log('default:   '+person);
console.log(person);
