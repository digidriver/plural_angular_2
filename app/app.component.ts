import { Component } from '@angular/core';
import { CustomerComponent } from './customer/customer.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [CustomerComponent]
})
export class AppComponent {
    //[ ] means property binding - one way (component to DOM)
    //( ) means event binding - one way (DOM to component)

    title = 'Customer App';
    name = 'Ramon';
    ramonsColor = 'red';
    customers = [
        {id: 1, name: 'Ramon'},
        {id: 2, name: 'Kevin'},
        {id: 3, name: 'Sanjay'},
        {id: 4, name: 'Paul'},
        {id: 5, name: 'Esmeralda'}
    ];

    changeButton() {
        this.ramonsColor = this.ramonsColor === 'green' ? 'red' : 'green';
    }
 }
