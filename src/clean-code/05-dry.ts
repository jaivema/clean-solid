
type Size = ''|'XS'|'S'|'M'|'L'|'XL'|'XXL';

class Product {
    constructor( 
        public name: string = '',
        public price: number = 0,
        public size: Size = '',
    ){}

    toString(){
        if ( this.name.length <= 0) throw Error('Name is empty.');
        if ( this.price <= 0)       throw Error('Price is empty.');
        if ( this.size.length <= 0) throw Error('Size is empty.');
        return `${ this.name } (${ this.size }) - €${ this.price }`;
    }
}

(()=>{
    const redTShirt = new Product('Red T-Shirt', 10, '');
    console.log(redTShirt.toString());
})();