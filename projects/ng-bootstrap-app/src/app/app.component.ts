// Taken from docu: https://ng-bootstrap.github.io/#/components/accordion/examples

import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbAccordionModule, NgbCalendar, NgbDatepickerModule, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  imports: [NgbAccordionModule, NgbDatepickerModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
	items = ['First', 'Second', 'Third'];

  today = inject(NgbCalendar).getToday();

	model: NgbDateStruct | undefined;
	date: { year: number; month: number; } | undefined;
}
