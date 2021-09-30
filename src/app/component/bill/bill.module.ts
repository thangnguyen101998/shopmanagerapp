import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';

import { BillRoutingModule } from './bill-routing.module';
import { BillListComponent } from './bill-list/bill-list.component';
import { BillAddComponent } from './bill-add/bill-add.component';

import { NzSelectModule } from 'ng-zorro-antd/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { BillDetailComponent } from './bill-detail/bill-detail.component';
import { BillEditComponent } from './bill-edit/bill-edit.component';

@NgModule({
  declarations: [BillListComponent, BillAddComponent, BillDetailComponent, BillEditComponent],
  imports: [
    CommonModule,
    BillRoutingModule,
    NzSelectModule,
    NzPaginationModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [CurrencyPipe],
})
export class BillModule {}
