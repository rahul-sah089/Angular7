import { Component } from '@angular/core';

@Component({
  selector: 'data-binding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DataBinding {
  serverElements = [{type:'server',name:'TestServer',content:'Jest a test!!!'}];
}
