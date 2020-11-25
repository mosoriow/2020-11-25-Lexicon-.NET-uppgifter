class Person {
    constructor(firstName,lastName,age,email) {
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
        this.email=email;
    }
    toString() {
        return this.firstName+' '+this.lastName+' (age: '+this.age+', email: '+this.email+')';
    }
}

function getPersons() {
    return Array(
        new Person('Maria',  'Petterson',22,'mp@gmail.com'),
        new Person('Lexicon','',         '',''),
        new Person('Stefan', 'Larsson',  25,''),
        new Person('Peter',  'Jansson',  24,'ptr@live.com')
    );
}

let myList=getPersons();
for(let i=0;i<myList.length;i++) {
    console.log((i+1).toString()+': '+myList[i].toString());
}

