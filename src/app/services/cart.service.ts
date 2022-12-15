import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

export interface Product {
  id: number;
  name: string;
  price: number;
  amount: number;
}

@Injectable({
  providedIn: "root",
})
export class CartService {
  data: Product[] = [
    { id: 0, name: 'MSI MPG Trident AS 11TD-1856PH', price: 129995.00, amount: 0,},
    { id: 1, name: 'Acer PO3-630', price: 139999.00, amount: 0 },
    { id: 2, name: 'Lenovo Legion Tower 7i', price: 149995.00, amount: 0 },
    { id: 3, name: 'Acer C24 1650 DQ.BFTSP.001 H&S', price: 37290.00, amount: 0 },
    { id: 4, name: 'ASUS V241EAK-WA007TS', price: 47995.00, amount: 0 },
    { id: 5, name: 'Lenovo F0G00052PH', price: 43995.00, amount: 0 },
    { id: 6, name: 'Lenovo IdeaPad Slim 3i', price: 47495.00, amount: 0 },
    { id: 7, name: 'Acer A515-57-57EZ Safari Gold', price: 45999.00, amount: 0 },
    { id: 8, name: 'ASUS Zephyrus G14', price: 149999.00, amount: 0 },
    { id: 9, name: 'Acer SF314-43-R06N Pure Silver', price: 39999.00, amount: 0 },
    { id: 10, name: 'ASUS G513RW-HF033W', price: 139999.00, amount: 0 },
    { id: 11, name: 'Lenovo IdeaPad 3', price: 44999.00, amount: 0 },
    { id: 12, name: 'ASUS Strix Carry Mouse', price: 3450.00, amount: 0 },
    { id: 12, name: 'ASUS Strix Impact P303', price: 1650.00, amount: 0 },
    { id: 12, name: 'Logitech M545 Black Wireless Mouse', price: 1050.00, amount: 0 },
    { id: 12, name: 'Logitech M221 Offwhite Silent Wireless Mouse', price: 580.00, amount: 0 },
    { id: 12, name: 'Logitech K380 Off-White', price: 1790.00, amount: 0 },
    { id: 12, name: 'A4TECH FG1112 & 2.4G Wireless Keyboard', price: 850.00, amount: 0 },
    { id: 12, name: 'ROG Falchion NX Blue', price: 7890.00, amount: 0 },
    { id: 12, name: 'RAPOO V560 Backlit Mechanical Gaming Keyboard', price: 1995.00, amount: 0 },
  ];

  private cart = [];
  private cartItemCount = new BehaviorSubject(0);

  constructor() {}

  getProducts(): Product[] {
    return this.data;
  }

  getCart(): Product[] {
    console.log("this.cart: ", this.cart);
    return this.cart;
  }

  getCartItemCount(): BehaviorSubject<number> {
    return this.cartItemCount;
  }

  addProduct(product: Product) {
    let added = false;
    for (let p of this.cart) {
      if (p.id === product.id) {
        p.amount += 1;
        added = true;
        break;
      }
    }
    if (!added) {
			product.amount = 1;
			this.cart.push(product);
			console.log(`product ${product.name} pushed to cart`);
		}
		this.cartItemCount.next(this.cartItemCount.value + 1);
  }

	decreaseProduct(product) {
    for (let [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        p.amount -= 1;
        if (p.amount == 0) {
          this.cart.splice(index, 1);
        }
      }
    }
    this.cartItemCount.next(this.cartItemCount.value - 1);
  }

  removeProduct(product) {
    for (let [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        this.cartItemCount.next(this.cartItemCount.value - p.amount);
        this.cart.splice(index, 1);
      }
    }
  }
}
