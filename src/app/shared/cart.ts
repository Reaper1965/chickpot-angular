import { CartItem } from "./models/cartItem";
import { Router } from "@angular/router";

export class cart{
    items:CartItem[]=[];

    get totalPrice():number{
        let totalPrice= 0;
        this.items.forEach(item => {
            totalPrice      
        });
        return totalPrice;
    }
}