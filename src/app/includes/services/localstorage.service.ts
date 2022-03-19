import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }

  getFromLocalStorage(key: any) {
    return (localStorage.getItem(key) as string);
  }

  setToLocalStorage(key: any, val: any) {
    localStorage.setItem(key, val);

  }

  deleteAllLocalStorage() {
    localStorage.clear();
  }
}
