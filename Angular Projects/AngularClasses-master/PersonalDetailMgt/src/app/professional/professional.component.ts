import { Component } from '@angular/core';
@Component({
    'selector' : 'app-professional',
    'template' : `
                <h3>Professional Carrier</h3>
                <h2>{{companyName}}</h2>
                <app-contact></app-contact>
                 `,
    'styles'   : ['h3,h2{color:red}']
})

export class ProfessionalComponent {
    companyName : string = "Infosys Ltd.";
}