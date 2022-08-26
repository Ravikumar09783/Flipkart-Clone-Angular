import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlaceOrderService {

  URL:string = 'http://localhost:3000/userAdd';

  constructor(
    private http:HttpClient
  ) { }

  getUserAddress(){
   return this.http.get<any>(this.URL)
  }

  addUserAddress(data:Object){
    return this.http.post<any>(this.URL, data)
  }
}
