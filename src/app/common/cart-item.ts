// W tej części kodu definiujemy klasę CartItem, która reprezentuje element w koszyku zakupów.
// Klasa CartItem posiada pięć właściwości: id, name, imageUrl, unitPrice i quantity.
// Właściwości te są inicjalizowane w konstruktorze klasy, który przyjmuje jako argument obiekt typu Product.
// Id produktu jest konwertowane na string i przypisywane do właściwości id.
// Nazwa, imageUrl i unitPrice produktu są bezpośrednio przypisywane do odpowiednich właściwości klasy CartItem.
// Właściwość quantity jest inicjalizowana wartością 1, co oznacza, że domyślnie do koszyka dodawany jest jeden egzemplarz danego produktu.
import { Product } from './product';

export class CartItem {
  public id: string = '';
  public name: string = '';
  public imageUrl: string = '';
  public unitPrice: number = 0;
  public quantity: number = 0;
  public unitsInStock: number = 0;
  public outOfStock: boolean = false;

  constructor(product: Product) {
    this.id = String(product.id);
    this.name = product.name;
    this.imageUrl = product.imageUrl;
    this.unitPrice = product.unitPrice;
    this.quantity = 1;
    this.unitsInStock = product.unitsInStock;
    this.outOfStock = product.unitsInStock === 0;
    console.log(' this.unitsInStock ><><><><>' + this.name + ': ' + this.unitsInStock);
  }
}
