import { Component, OnInit } from '@angular/core';
import { DroneServiceService } from '../service/drone-service.service';

@Component({
  selector: 'app-test-service',
  templateUrl: './test-service.component.html',
  styleUrls: ['./test-service.component.scss']
})
export class TestServiceComponent implements OnInit {

  constructor(private droneService: DroneServiceService) { }

  tab = this.droneService.getDrone();

  ngOnInit() {
  }

}
