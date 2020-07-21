import {Component} from '@angular/core';
import {green} from "color-name";
import {isUpperCase} from "tslint/lib/utils";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularproject';
  config = {color: 'red', isUpperCase: true};
  isComponentVisible = true;
  buttonClicked(clickCounter: number): any {
    if (clickCounter >= 15) {
      this.isComponentVisible = false;
    }
    else if (clickCounter >= 10) {
      this.title = 'Nice job';
      this.config.color = 'green';
      this.config.isUpperCase = false;
    }
  }
}
