import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UnoComponent } from './uno/uno.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UnoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hello-angular';
}
