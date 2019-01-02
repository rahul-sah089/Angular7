import { Component } from '@angular/core';

@Component({
  selector: 'data-binding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DataBinding {
  serverElements = [{ type: 'server', name: 'TestServer', content: 'Jest a test!!!' }];

  onServerAdded(serverData: { serverName: string, serverContent: string }) {
    this.serverElements.push(
      {
        type: "server",
        name: serverData.serverName,
        content: serverData.serverContent
      });
  }

  onBlueprintAdded(bluePrintData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: "blueprint",
      name: bluePrintData.serverName,
      content: bluePrintData.serverContent
    });
  }


}
