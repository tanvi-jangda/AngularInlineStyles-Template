import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h3>Inline template</h3>
  <p>Second line of inline template</p>
  `,
  styles: [`
  h3{color:blue; font-weight:normal} p{color:green; font-weight:bold }`
]
})
export class AppComponent {
  title = 'April16';
}
