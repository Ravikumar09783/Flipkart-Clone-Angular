import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PlaceOrderService } from 'src/app/service/place-order.service';
import { Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.scss']
})
export class PlaceOrderComponent implements OnInit {
  orderSuccess:boolean=false;

  constructor(
    private service : PlaceOrderService,
    private router : Router,
    private cart: CartService,
  ) { }

  placeOrder= new FormGroup({
    fname : new FormControl('', Validators.required),
    lname : new FormControl('', Validators.required),
    add1 : new FormControl('', Validators.required),
    add2 : new FormControl('', Validators.required),
    city : new FormControl('', Validators.required),
    state : new FormControl('', Validators.required),
    zip : new FormControl('', Validators.required)

  })

  ngOnInit(): void {
  }
  PlaceOrder(){
    this.service.addUserAddress(this.placeOrder.value).subscribe((res)=>{
      console.log("New user ", res)
      this.cart.getProducts().subscribe((res:any)=>{
        console.log("PRODUCTS",res)
      })

    })

   this.service.getUserAddress().subscribe((userAdd)=>{
    console.log("All User Address:", userAdd)
   })

  //  this.router.navigate(['products'])
   this.orderSuccess=true;
   this.placeOrder.reset({});
   console.log("Order has been placed")
   this.router.navigate(['products'])

  }



}
