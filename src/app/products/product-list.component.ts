import { Component } from "@angular/core";
import { IProduct } from "./product";
import { OnInit } from "@angular/core";
import { ProductService } from "./product.service";


@Component({
    
    templateUrl:'./product-list.component.html',
    styleUrls:['./product-list.component.css'] 
})
export class ProductListComponent implements OnInit{
        pageTitle : string = 'Product List';
        imageWidth: number = 50;
        imageMargin: number =2;
        showImage: boolean = false; 
        errorMesssage : string;
      
        onRatingClicked(message:string) : void {
            this.pageTitle= 'Product List: '+ message;
        }
       
        _listFilter: string;
        get listFilter():string{
            return this._listFilter;
        }

        set listFilter(value:string){
            this._listFilter = value;
            this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
        }
        filteredProducts:IProduct [];

        performFilter(filterBy: string):IProduct[] 
        {
            filterBy = filterBy.toLocaleLowerCase();
            return this.products.filter((product:IProduct)=> 
                product.productName.toLocaleLowerCase().indexOf(filterBy)!=-1);
            
        }
        
        constructor(private _productService:ProductService){
           
        }
        
        products : IProduct[]= [];  

        toggleImage(): void {
            this.showImage = !this.showImage;
        };

        ngOnInit():void{
            this._productService.getProducts().subscribe(products => { this.products = products; this.filteredProducts = this.products; },
                 error => this.errorMesssage=<any>error);
            this.filteredProducts = this.products;
        };
}