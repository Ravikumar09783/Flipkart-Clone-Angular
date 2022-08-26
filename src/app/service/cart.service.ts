import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class CartService {

  public cartItemList : any =[]
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");

  constructor() { }


  addtoCart(product : any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log("Total cost of all the Products",this.getTotalPrice())
  }


  getProducts(){
    // console.log("getProducts called")
    // console.log(this.productList)
    return this.productList.asObservable();
  }


  setProduct(product : any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }





  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal;
  }


  removeCartItem(product: any){
    this.cartItemList.map((a:any, index:number)=>{
      if(product.id=== a.id){
        this.cartItemList.splice(index,1);
        return;
      }
    })
    this.productList.next(this.cartItemList);
  }


  removeAllCart(){
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }

}
