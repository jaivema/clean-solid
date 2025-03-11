(()=>{
    //a

    type Gender = 'M' | 'F';
    
    // por defecto , si no se declara la propiedad de acceso, se accede directamente a ellos y es de carácter public
    class Person1 {
        //     <atributos> - <tipos o tipados>
        private name: string;
        public gender: Gender;
        public birthdate: Date;
        
        // El constructor es un método especial que se ejecuta cuando se crea una instancia de la clase. Su función es asignar los valores de los parámetros a las atributos de la clase.
        //<-----------------parámetros--------------->
        constructor(name: string, gender: Gender, birthdate: Date){
        this.name = name;
        this.gender = gender;
        this.birthdate = birthdate;
    }
    
    // Una propiedad es una forma controlada de acceder a los atributos de una clase, generalmente utilizando métodos get y set ('getName' y 'setName').
    // Propiedad 'getName' para el atributo 'name'.
    get getName(): string {
        return this.name;
    }
    set setName(value: string) {
        if (value.length > 0) {
            this.name = value;
        } else {
            throw new Error("El nombre no puede estar vacío.");
        }
    }
}


class Person2 {
    constructor(
        public name: string, 
        public gender: Gender, 
        public birthdate: Date
    ){}
}

const newPerson1 = new Person1('Jaime', 'M', new Date('1979-02-09'));
const newPerson2 = new Person2('Jaime V.', 'M', new Date('1979-02-09'));
console.log({ newPerson1 });
console.log({ newPerson2 });

//b
// En herencia de clases es complicado de manejar

class Person {
    constructor(public name: string, public gender: Gender, public birthdate: Date){}
    
    toString(){
        return `${this.name}, ${this.gender}, ${this.birthdate}`;
    }
}

//en este punto, al extends, a User adquiere todas las propiedades de Person
class User extends Person {
    public lastAccess: Date;
    
    constructor(
        //características propias para User
        public email: string,
        public role: string,
        //características de Person. Es necesario inicializar las propiedades de Person - que es el padre Llamando al constructor
        name: string, 
        gender: Gender, 
        birthdate: Date,
    ) {
        //mando a llamadar al constructor del padre con super()
        super(name, gender, birthdate);
        this.lastAccess = new Date();
    }
    
    //método para comprobar las credenciales en User
    checkCredentials() {
        return true;
    }
    
}

//La herencias mediante 'extends' significa que debes cumplir todos los requisitos (atributos) que el constructor del padre necesite.
class UserSettings extends User {
    constructor(
        public workingDirectory: string,
        public lastFolderOpen: string,
        email: string,
        role: string,
        name: string, 
        gender: Gender, 
        birthdate: Date
    ){super(email, role, name, gender, birthdate)}
}

const userSettings = new UserSettings("home/jaime", "/home", "j@jv.com", "Admin", "Jaime", "M", new Date);
console.log({userSettings}); 

// El método checkCredentials se hereda de User y toString se heredan de Person.
console.log(userSettings.checkCredentials(), userSettings.toString());
})