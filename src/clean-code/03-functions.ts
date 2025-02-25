//FUNCIONES
/*
 - Simplicidad.
 - Funciones de tamaño reducido.
 - Funciones de una sola línea sin causar complejidad.
 - Menos de 20 líneas de código. (Recomendado)
 - Evitar el uso de "else". Debe ser estrictamente necesario.
 - Priorizar el uso de la condición ternaria.
*/

(() => {

    // función para obtener información de una película por Id
    function getmovieById( id: string ) {
        console.log({ id });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getMovieCastById( id: string ) {
        console.log({ id });
    }

    // funcion para obtener el bio del actor por el id
    function getActorBioById( id: string ) {
        console.log({ id });
    }
    
    // Crear una película
    interface Movie {
        cast:           string[];
        description:    string;
        rating:         number;
        title:          string;
    }
    function createMovie({title, description, rating, cast}:Movie) {
        console.log({ title, description, rating, cast });
    }

    // Crea un nuevo actor
    function createActor( fullName: string, birthdate: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor', birthdate);
        return true;        

    }

    


})();
