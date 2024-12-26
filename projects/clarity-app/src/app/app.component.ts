import { Component } from '@angular/core';
import { ClarityModule } from "@clr/angular";

@Component({
  selector: 'app-root',
  imports: [ClarityModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'clarity-app';
}

export default AppComponent;
