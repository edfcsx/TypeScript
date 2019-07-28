class Product {
  constructor(
    public name: string,
    public price: number,
    public discount: number = 0, 
  ) {}

  public resume = () => {
    console.log(`Product ${this.name}, price is ${this.price - this.discount}`)
  }
}

const productX = new Product('Arroz', 5);
const productY = new Product('Salsicha', 10, 2);

productX.resume();
productY.resume();