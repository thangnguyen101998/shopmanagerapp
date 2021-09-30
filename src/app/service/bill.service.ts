import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Bill, BillPagination } from '../model/bill';

@Injectable({
  providedIn: 'root',
})
export class BillService {
  apiServiceUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  getAllBill(
    currentPage: number,
    pageSize: number
  ): Observable<BillPagination> {
    return this.http.get<BillPagination>(
      `${this.apiServiceUrl}/api/bills/${currentPage}/${pageSize}`
    );
  }

  saveBill(formData: FormData): Observable<any> {
    return this.http.post<any>(`${this.apiServiceUrl}/api/bills/add`, formData);
  }

  findById(billId: number | undefined): Observable<Bill> {
    return this.http.get<Bill>(`${this.apiServiceUrl}/api/bills/${billId}`);
  }

  deleteBill(billId: number | undefined): Observable<void> {
    return this.http.delete<void>(`${this.apiServiceUrl}/api/bills/${billId}`);
  }
}
