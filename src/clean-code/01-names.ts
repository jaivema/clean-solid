(() => {
    // Ejemplo
    // Archivos a evaluar - files to evaluate
    const fs = [
        { id: 1, f: false },
        { id: 2, f: false },
        { id: 3, f: true },
        { id: 4, f: false },
        { id: 5, f: false },
        { id: 7, f: true },
    ]; 
    
    // Archivos marcados para borrar - files to delete
    const arhivos = fs.map( f => f.f );


    //correctamente
    const evaluatedFiles =[
        { id: 1, isEvaluated: false },
        { id: 2, isEvaluated: false },
        { id: 3, isEvaluated: true },
        { id: 4, isEvaluated: false },
        { id: 5, isEvaluated: false },
        { id: 7, isEvaluated: true },
    ]; 
    const filesToDelete = evaluatedFiles.map( file => file.isEvaluated );

    // Malos nombres
    class AbstractUser { };
    class UserMixin { };
    class UserImplementation { };
    interface IUser { };

    // Mejor
    class User { };
    interface User { };


    // Todo: Tarea
        //resolver lo nombres a valores legibles por el humano
    // día de hoy - today
    const today = new Date();
    
    // días transcurridos - elapsed time in days
    const elapsedDays: number = 23;
    
    // número de archivos en un directorio - number of files in directory
    const dirFiles = 33;
    
    // primer nombre - first name
    const firstName = 'Fernando';
    
    // primer apellido - last name
    const lastName = 'Herrera';

    // días desde la última modificación - days since modification
    const daysSinceModification = 12;
    
    // cantidad máxima de clases por estudiante - max classes per student
    const maxStudents = 6;


    //Arreglos - Arrays
    //malo
    const fruit= ['manzana','pera','naranja'];
    //regular
    const fruitList = ['manzana','pera','naranja'];
    //bueno
    const fruits = ['manzana','pera','naranja'];
    //mejor - indica lo que se muestra. Nombres de frutas
    const fruitNames = ['manzana','pera','naranja'];


    //booleans
    //malo - NO tienen sentido porque no corresponde con el tipo de dato
    const active = true;
    const wite = true;
    const noValues = true;
    const notEmpty = true;
    //mejor - no se necesitan neuronas extras para pensar el código
    const isEnable = true;
    const canWite = true;
    const hasValues = true;
    const isEmpty = true;

    //numeros
    //malo - tengo que sentarme a leer el contexto del código para conocer el contenido.
    // ¿es un total?¿es un minimo?¿es un maximo?¿es un promedio?
    const a = 1;
    const cars = 10;
    const frutas = 3;
    const payments = 20;
    //mejor
    const total = 1;
    const minCars = 1;
    const maxFruits = 20;
    const averagePayments = 30.89;

    // funciones - functions
    // Deben represantar acciones que deben construirse con el verbo que representa la acción seguido de un sustantivo - deben descriptivos y a la vez concisos, que expresen lo que hacen específicamente pero abstenerse de los detalles de implementación.
    //malos
    function createUserIfNotExists():void{};
    function updateUserIfNotEmpy():void{};
    function functionsendEmailIfFieldValid(){};
    //bueno
    function createUser():void{};
    function updateUser():void{};
    function sendEmail():void{};
})();