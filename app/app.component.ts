import { Component } from '@angular/core';
import { CustomersComponent } from './customer/customers.component';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    directives: [CustomersComponent]
})
export class AppComponent {
    //[ ] means property binding - one way (component to DOM)
    //( ) means event binding - one way (DOM to component)

    title = 'Customer App';
    name = 'Ramon';
    ramonsColor = 'red';    

    changeButton() {
        this.ramonsColor = this.ramonsColor === 'green' ? 'red' : 'green';
    }
 }
