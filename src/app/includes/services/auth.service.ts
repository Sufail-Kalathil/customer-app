import {Injectable} from '@angular/core';
import {LocalstorageService} from "./localstorage.service";
import {localstorageVariables} from "../../config/localstorageVariables";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private localstorageService: LocalstorageService,
  ) {
  }


  isLoggedIn = () => this.localstorageService.getFromLocalStorage(localstorageVariables.isLoggedIn) && this.localstorageService.getFromLocalStorage(localstorageVariables.isLoggedIn) == 'true'
}
