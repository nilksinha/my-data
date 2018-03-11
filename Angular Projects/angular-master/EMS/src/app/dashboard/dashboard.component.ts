import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../services/logging.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  //logService:LoggingService = new LoggingService();
  constructor(private logService:LoggingService) { }

  ngOnInit() {
    this.logService.logMessage("Insinde Dashboard Component Via Dependency Injection");
  }

}
