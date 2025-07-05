import { Component } from '@angular/core';
import { AddressComponent } from "./address/address.component";
import { TableComponent } from "./table/table.component";

@Component({
  selector: 'app-root',
  imports: [AddressComponent, TableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-material-app';
}

export default AppComponent;
