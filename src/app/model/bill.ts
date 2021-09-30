import { User } from './user';

export interface Bill {
  id: number;
  total: number;
  user: User;
  createdDate: Date;
}

export interface BillError {
  userId: string;
  billDetailDTO: string;
  createdDate: string;
}

export interface BillPagination {
  content: [];
  totalElements: number;
}
