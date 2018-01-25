import { Component } from "@angular/core";

@Component({ 
  selector: 'pm-root',
  template:`<div>
  <!-- <h3>First Angular Component:</h3> -->
  <h3><strong>{{pageTitle}}</strong> </h3>
  <pm-products></pm-products>
  
</div>`
})

export class AppComponent{
    pageTitle:string = 'ACME Product Manager';
}