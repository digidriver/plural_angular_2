import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html' 
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
