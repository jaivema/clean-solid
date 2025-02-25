(() => {

    const celsiusTemps = [33.6, 12.34];

    const serverIp = '123.123.123.123';

    const users = [{id: 1, email: 'fernando@google.com'},{ id: 2, email: 'juan@google.com' }, { id: 3, email: 'melissa@google.com' }];

    const userEmails = users.map( user => user.email );

    const canJump = false;
    const canRun = true;
    const isLoading = false;
    const hasItems = true;

    const start = new Date().getTime();
    const startTime = new Date().getTime();

    //....
    // 3 doritos después y una cola
    //...

    const end = new Date().getTime() - start;
    const endTime = new Date().getTime() - startTime;

    function getBooks() {
        throw new Error('Function not implemented.');
    }

    function getBooksByUrl( url: string) {
        console.log(url);
        throw new Error('Function not implemented.');
    }
    
    function areaCuadrado( s: number ) {
        throw new Error('Function not implemented.');
    }
    function getSquareArea( side: number ) {
        console.log(side);
        throw new Error('Function not implemented.');
    }

    function printJob() {
        console.log('Imprimiendo...');
        throw new Error('Function not implemented.');
    }

})();