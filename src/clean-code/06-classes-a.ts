// PRINCIPIO DE RESPONSABILIDAD ÚNICA //
type Gender = 'M' | 'F';

// por defecto , si no se declara la propiedad de acceso, es public

class Person1 {
    public name: string;
    public gender: Gender;
    public birthdate: Date;

    constructor(name: string, gender: Gender, birthdate: Date){
        this.name = name;
        this.gender = gender;
        this.birthdate = birthdate;
    }
}

class Person2 {
    constructor(public name: string, public gender: Gender, public birthdate: Date){}
}

const newPerson1 = new Person1('Jaime', 'M', new Date('1979-02-09'));
const newPerson2 = new Person2('Jaime V.', 'M', new Date('1979-02-09'));
console.log({ newPerson1 });
console.log({ newPerson2 });