import {Injectable} from '@angular/core';

// import * as _ from 'underscore';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  constructor() {
  }


  range = (min: number = 0, max: number = 0) => Array.from({length: max - min}, (_, i) => min + i);


  getPager(totalItems: number, currentPage: number = 1, pageLimit: number = 10) {

    // find total pages
    const totalPages = Math.ceil(totalItems / pageLimit);
    let startPage: number, endPage: number;


    if (totalPages <= 5) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPage <= 3) {
        startPage = 1;
        endPage = 5;
      } else if (currentPage + 1 >= totalPages) {
        startPage = totalPages - 4;
        endPage = totalPages;
      } else {

        if ((totalPages - (currentPage - 2)) == 5) {
          startPage = currentPage - 1;
          endPage = currentPage + 3;
        } else {
          startPage = currentPage - 2;
          endPage = currentPage + 2;
        }
      }
    }

    // calculate start and end item indexes
    let startIndex = (currentPage - 1) * pageLimit;
    let endIndex = Math.min(startIndex + pageLimit - 1, totalItems - 1);

    let pages = this.range(startPage, endPage + 1);

    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pages: pages,
      pageSize: pageLimit,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
    };
  }
}
