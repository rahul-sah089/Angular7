import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  //
  /*template: `
  <app-server></app-server>
  <app-server></app-server>
  <app-server></app-server>`,*/
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus: String = "No server was createds";
  serverName1 = "";
  serverName2 = "Test Server";
  userName = "";
  password = "";
  showUserName = false;
  showPassword = false;
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  ngOnInit() {
  }

  onSeverCreation() {
    this.serverCreationStatus = "Server Created and the server name is " + this.serverName2;
  }

  login() {
    //simple validation for username. Avoid empty value
    if (this.userName.length < 2) {
      this.showUserName = true;
      return;
    }
    ///simple validation for password. Avoid empty value
    if (this.password.length < 3) {
      this.showPassword = true;
      return;
    }
    alert("login successful");
    console.log("Username " + this.userName + " and password " + this.password);
    //reset the input fields
    this.userName = "";
    this.password = "";

  }

  onUpdateServerName(values: Event) {
    //alert("update server called");
    console.log(values);
    this.serverName1 = (<HTMLInputElement>values.target).value;
  }

}
