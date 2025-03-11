
type Gender = 'M'|'F';

interface PersonProps{
    name: string;
    gender: Gender;
    birthdate: Date;
}
class Person {
    public name: string;
    public gender: Gender;
    public birthdate: Date;

    constructor({name , gender, birthdate}:PersonProps){
        this.name = name;
        this.gender = gender;
        this.birthdate = birthdate;
    }

    toString(){
        return `${this.name}, ${this.gender}, ${this.birthdate}`;
    }
}

interface UserProps{
    email: string;
    role: string;
    name: string;
    gender: Gender;
    birthdate: Date;
}

class User extends Person {
    public email: string;
    public role: string;
    public lastAccess: Date;
    
    constructor({ email, role, name, gender, birthdate }: UserProps) {
        super({ name, gender, birthdate });
        this.lastAccess = new Date();
        this.email = email;
        this.role = role;
    }
    
    checkCredentials() {
        return true;
    }
}

interface UserSettingsProps{
    workingDirectory: string;
    lastFolderOpen: string;
    email: string;
    role: string;
    name: string; 
    gender: Gender; 
    birthdate: Date;
}
class UserSettings extends User {
    public workingDirectory: string;
    public lastFolderOpen: string;
    
    constructor({ workingDirectory, lastFolderOpen, email, role, name, gender, birthdate }:UserSettingsProps){
        super({email, role, name, gender, birthdate});
        this.workingDirectory = workingDirectory;
        this.lastFolderOpen = lastFolderOpen;
    }
}

const userSettings = new UserSettings({
    workingDirectory: "home/jaime", 
    lastFolderOpen: "/home", 
    email: "j@jv.com", 
    role: "Admin", 
    name: "Jaime", 
    gender: "M", 
    birthdate: new Date
})

console.log({userSettings}); 
console.log(userSettings.checkCredentials(), userSettings.toString());