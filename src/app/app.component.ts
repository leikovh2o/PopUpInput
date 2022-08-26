import { Component, OnInit } from '@angular/core';

declare function Input():any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'InputAPP';

  ngOnInit():void {
    Input();
  }
}
