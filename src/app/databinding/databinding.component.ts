import { Component } from '@angular/core';
import { Server } from '../model/server.model';

@Component({
    selector: "data-binding",
    templateUrl: "./databinding.component.html",
    styleUrls: ["./databinding.component.css"]
})

export class DataBinding {
    server: Server[] = [];
    serverBluePrint: Server[] = [];
    serverName = "";
    serverContent = "";
    displayServer: boolean = false;
    diplayServerBluePrint: boolean = false;

    constructor() {
        console.log("calling data binding constructor");
    }

    addServer() {
        //alert("Server Name " + this.serverName + " and server content " + this.serverContent);
        this.server.push(new Server(this.serverName, this.serverContent));
        if (this.server.length > 0) {
            this.displayServer = true;
        }

    }

    addServerBluePrint() {
        //alert("add server blueprint called");
        this.serverBluePrint.push(new Server(this.serverName, this.serverContent));
        if (this.serverBluePrint.length > 0) {
            this.diplayServerBluePrint = true;
        }
    }
}