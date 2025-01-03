import { Component } from '@angular/core';
import { GridDataResult, PageChangeEvent, GridModule } from '@progress/kendo-angular-grid';
import { SortDescriptor } from '@progress/kendo-data-query';
// import { FilterDescriptor } from "@progress/kendo-data-query";
import { ProductService } from './product.service';
import { Observable } from 'rxjs';
import { categories, Category } from './data.products';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    imports: [GridModule, DropDownsModule, CommonModule],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [ProductService]
})
export class AppComponent {
    // used for the DropDownList
    public dropDownItems: Category[] = categories;
    public defaultItem: Category = { text: 'Filter by Category', value: null };

    // used for the Grid
    public gridItems: Observable<GridDataResult> | undefined;
    public pageSize: number = 10;
    public skip: number = 0;
    public sortDescriptor: SortDescriptor[] = [];
    // public filterDescriptor: FilterDescriptor[] = [];
    public filterTerm: number | null = null;

    constructor(private service: ProductService) {
        this.loadGridItems();
    }

    public pageChange(event: PageChangeEvent): void {
        this.skip = event.skip;
        this.loadGridItems();
    }

    private loadGridItems(): void {
        this.gridItems = this.service.getProducts(this.skip, this.pageSize, this.sortDescriptor, this.filterTerm);
    }

    public handleSortChange(descriptor: SortDescriptor[]): void {
        this.sortDescriptor = descriptor;
        this.loadGridItems();
    }

    public handleFilterChange(item: Category): void {
        this.filterTerm = item.value;
        this.skip = 0;
        this.loadGridItems();
    }
}
