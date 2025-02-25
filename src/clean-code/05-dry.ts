
type Size = '' | 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL';

class Product {
    constructor(
        public name: string = '',
        public price: number = 0,
        public size: Size = '',
    ) { }

    private isProductReady(): boolean {
        for (const key in this) {
            switch (typeof this[key]) {
                case 'string':
                    if (this[key].length <= 0) throw Error(`${key} is empty.`);
                    break;
                case 'number':
                    if (this[key] <= 0) throw Error(`${key} is zero.`);
                    break;
                default:
                    throw Error(`${typeof this[key]} is not allowed.`);
            }
        }
        return true;
    }
    toString() {
        // No Dry
        // if ( this.name.length <= 0) throw Error('Name is empty.');
        // if ( this.price <= 0)       throw Error('Price is empty.');
        // if ( this.size.length <= 0) throw Error('Size is empty.');

        if (!this.isProductReady()) return 'Product is not ready';
        return `${this.name} (${this.size}) - €${this.price}`;
    }
}

(() => {
    const redTShirt = new Product('Red T-Shirt', 10, 'M');
    console.log(redTShirt.toString());
})();