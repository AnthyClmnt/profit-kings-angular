import {Component, OnInit} from '@angular/core';
import { ConfigService } from "./config/config.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'profit-kings-angular';
  users: any;

  constructor(public configService: ConfigService) {
  }

  ngOnInit() {
    this.configService.getUsersRequest().subscribe(x => {
      this.users = x;
    })
  }
}
