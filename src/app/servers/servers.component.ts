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
  allowNewServer:boolean = false;
  serverCreationStatus : String  = "No server was createds";
  serverName1 = "";
  serverName2 = "Test Server";
  constructor() {
    setTimeout(() => { 
      this.allowNewServer = true;
    }, 2000);
  }
  ngOnInit() {
  }

  onSeverCreation(){
    this.serverCreationStatus = "Server Created and the server name is "+this.serverName2;
  }

  onUpdateServerName(values:Event){
    //alert("update server called");
    console.log(values);
    this.serverName1 = (<HTMLInputElement>values.target).value; 
  }

}
