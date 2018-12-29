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
  serverName = "";
  constructor() {
    setTimeout(() => { 
      this.allowNewServer = true;
    }, 2000);
  }
  ngOnInit() {
  }

  onSeverCreation(){
    this.serverCreationStatus = "Server Creation!!!";
  }

  onUpdateServerName(values:Event){
    //alert("update server called");
    console.log(values);
    this.serverName = (<HTMLInputElement>values.target).value; 
  }

}
