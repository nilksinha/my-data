import { Injectable } from '@angular/core';
export class LoggingService {
    logMessage(msg : string){
        console.log(msg);
    }
}