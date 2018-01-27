import { Injectable } from "@angular/core";
import { Observable} from  "rxjs/Observable";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import { IProduct } from "./product";


import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { CanActivate } from "@angular/router/src/interfaces";

@Injectable()

export class ProductService {

    private _productUrl= "./api/products/products.json";
    constructor(private _http: HttpClient){

    };

    getProducts() : Observable<IProduct[]> {
        return this._http.get<IProduct[]>(this._productUrl).do(data => console.log('All: '+ JSON.stringify(data)))
        .catch(this.handleError);
    }

    getProduct(id:number):Observable<IProduct>{
        return this.getProducts()
        .map((products:IProduct[])=>products.find(p => p.productId == id));
    }
    private handleError(err:HttpErrorResponse){
        console.log(err.message);
        return Observable.throw(err.message);
    }
    
};