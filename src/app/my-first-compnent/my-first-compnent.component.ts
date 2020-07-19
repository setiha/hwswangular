import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-first-compnent',
  templateUrl: './my-first-compnent.component.html',
  styleUrls: ['./my-first-compnent.component.css']
})
export class MyFirstCompnentComponent implements OnInit {
message = 'this is my message';

  constructor() { }

  ngOnInit(): void {
  }

}
