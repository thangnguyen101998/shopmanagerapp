import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  CustomResultImportBillAndProduct,
  ImportBillPagination,
} from 'src/app/model/import-bill';
import { ImportBillService } from 'src/app/service/import-bill.service';

@Component({
  selector: 'app-product-inventory-list',
  templateUrl: './product-inventory-list.component.html',
  styleUrls: ['./product-inventory-list.component.css'],
})
export class ProductInventoryListComponent implements OnInit {
  customResultImportBillAndProduct?: CustomResultImportBillAndProduct[];
  customResult?: CustomResultImportBillAndProduct;

  listPageSize = [
    { label: '10', value: 10 },
    { label: '15', value: 15 },
    { label: '20', value: 20 },
    { label: '25', value: 25 },
  ];

  pageSize = this.listPageSize[0];
  currentPage = 1;
  ordinalNumber = this.currentPage * this.pageSize.value;
  totalElements = 0;

  constructor(private importBillService: ImportBillService) {}

  ngOnInit(): void {
    this.findAllQuantityAndTotalProduct(
      this.currentPage - 1,
      this.pageSize.value
    );
    this.countQuantityAndTotalProduct();
  }

  findAllQuantityAndTotalProduct(currentPage: number, pageSize: number) {
    this.importBillService
      .findQuantityAndTotalProduct(currentPage, pageSize)
      .subscribe(
        (response: ImportBillPagination) => {
          this.customResultImportBillAndProduct = response.content;
          this.totalElements = response.totalElements;
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
  }

  changePageSize(value: any) {
    this.pageSize = value;
    this.currentPage = 1;
    this.findAllQuantityAndTotalProduct(
      this.currentPage - 1,
      this.pageSize.value
    );
  }

  changePage() {
    this.ordinalNumber = (this.currentPage - 1) * this.pageSize.value;
    this.findAllQuantityAndTotalProduct(
      this.currentPage - 1,
      this.pageSize.value
    );
  }

  countQuantityAndTotalProduct() {
    this.importBillService.countQuantityAndTotalImportBill().subscribe(
      (response: CustomResultImportBillAndProduct) => {
        this.customResult = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
