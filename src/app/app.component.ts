import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AzureAd';

  constructor(private data: DataService) {  }

  ngOnInit(): void {
    this.data.setActiveAccount();
  }

  isLoggedIn(): boolean {
    return this.data.isLoggedIn();
  }

  login() {
    this.data.login();
  }

  logout() {
    this.data.logout();
  }
}
