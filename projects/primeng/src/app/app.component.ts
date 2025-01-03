import { Component } from '@angular/core';
import { MegaMenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { MegaMenuModule } from 'primeng/megamenu';
import { DataViewModule } from 'primeng/dataview';
import { TableFilterBasicDemo } from './table-demo/table-filter-basic-demo';

@Component({
  selector: 'app-root',
  imports: [MegaMenuModule, ButtonModule, DataViewModule, TableFilterBasicDemo],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'primeng';
  items: MegaMenuItem[] = [
    { label: 'Home' },
    {
      label: 'This',
      items: [
        [{ label: 'Use Case #1' }, { label: 'Use Case #4' }],
        [{ label: 'Use Case #2' }, { label: 'Use Case #5' }],
        [{ label: 'Use Case #3' }, { label: 'Use Case #6' }],
      ],
    },
    { label: 'That' },
  ];

  handler() {
    alert("Ouch!");
  }
}
