import { Component } from "@angular/core";
import { ProductService} from "./products/product.service";

@Component({ 
  selector: 'pm-root',
  template:`<div>
  <!-- <h3>First Angular Component:</h3> -->
  <h3><strong>{{pageTitle}}</strong> </h3>
  <pm-products></pm-products>
  
</div>`,
providers:[ProductService]
})

export class AppComponent{
    pageTitle:string = 'ACME Product Manager';
}