import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { CustomerComponent } from './customer.component';
import { CustomerService } from './customer.service';

@Component({
    moduleId: module.id,
    selector: 'app-customers',
    templateUrl: 'customers.component.html',
    directives: [CustomerComponent],
    providers: [CustomerService]
})
export class CustomersComponent implements OnInit {
    //customers: Observable<any[]>;
    //customers: Promise<any[]>;
    customers: any[];

    constructor(private _customerService: CustomerService) { }

    ngOnInit() {
        this._customerService.getCustomers()
            .then((customers) => this.customers = customers)
            .catch((err) => {
                console.log(err); // show error details
                return Observable.of(true); // eat it, only if message was communicated to user
             });

        //Promise<any[]> version
        /*this.customers = this._customerService.getCustomers()
            .catch((err) => {
                console.log(err); // show error details
                return Observable.of(true); // eat it, only if message was communicated to user
             });*/

        //Observable<any[]> version
        /*this.customers = this._customerService.getCustomers()
            .catch((err) => {
                console.log(err); // show error details
                return Observable.of(true); // eat it, only if message was communicated to user
             });*/
     }
}