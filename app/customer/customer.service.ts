import { Injectable } from '@angular/core';

@Injectable()
export class CustomerService {

    constructor() { }
    
    getCustomers() {
        return [
            {id: 1, name: 'Ramon'},
            {id: 2, name: 'Kevin'},
            {id: 3, name: 'Sanjay'},
            {id: 4, name: 'Paul'},
            {id: 5, name: 'Esmeralda'}
        ];
    }
}