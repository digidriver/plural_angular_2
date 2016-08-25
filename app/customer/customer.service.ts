import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

const URL_CUSTOMER = 'app/customers.json';

@Injectable()
export class CustomerService {    
    constructor(private _http: Http) { }
    
    getCustomers() {
        return this._http.get(URL_CUSTOMER)
            .map((response: Response) => response.json())
            .catch(this._handlerError);
    }

    _handlerError(err: any) {
        console.log(err); // log error and format message for devs
        return Observable.throw(err); // this can be customized later 
    }
}