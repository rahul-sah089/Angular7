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

}