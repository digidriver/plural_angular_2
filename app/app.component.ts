import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
//import { CustomersComponent } from './customer/customers.component';
//import { CustomerService } from './customer/customer.service';

//Here is my index barrel
import { CustomersComponent, CustomerService } from './customer/index';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    directives: [CustomersComponent],
    providers: [HTTP_PROVIDERS, CustomerService]
})
export class AppComponent {
    //[ ] means property binding - one way (component to DOM)
    //( ) means event binding - one way (DOM to component)

    title = 'Customer App';
    name = 'Ramon';
    ramonsColor = 'green';    

    changeButton() {
        this.ramonsColor = this.ramonsColor === 'green' ? 'red' : 'green';
    }
 }
