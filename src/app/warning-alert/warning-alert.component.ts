import {Component} from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template:
  `
     <p>This is a warning, you are in a danger!</p>
  `,
  styles: [
      `
      p {
        padding: 1px;
        background-color: mistyrose;
        border: 2px solid red;
      }
    `
  ]
})

export class WarningAlertComponent {
}
