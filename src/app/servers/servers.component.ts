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
  server1CreationStatus : String = "";
  server2CreationStatus: String = "";
  displayServer1CreationStatus = false;
  serverName1 = "";
  serverName2 = "Test Server";
  userName = "";
  password = "";
  servers = ["server1"];
  displayServerCreationStatus = false;
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
    //server 1 creation logic
    if(this.serverName1.length == 0){
      this.displayServer1CreationStatus = false;
    }
    else{
      this.displayServer1CreationStatus = true;
    }
    //server 2 creation logic
    if(this.serverName2.length > 0){
      this.server2CreationStatus = "Server Created and the server name is " + this.serverName2;
    }
    else if(this.serverName2.length == 0){
      this.server2CreationStatus = "Server 2 not created!!";
      return;
    }
    this.servers.push(this.serverName2);
    
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
