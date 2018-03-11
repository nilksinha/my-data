import { Component } from '@angular/core';
@Component({
    selector : 'app-address',
    templateUrl: './address.component.html',
    styleUrls: ['./address.component.css']
})
export class AddressComponent {
    address1: string = 'A-1106 Alcove Society';
    address2: string = 'Kunal Icon Road,Pimple Saudagar';
    city: string = 'Pune';
    state: string = 'Maharashtra';
    country: string = 'Indiia';
    pinCode: string = '411027';
}

