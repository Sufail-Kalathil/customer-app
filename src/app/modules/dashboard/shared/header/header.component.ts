import {Component, OnInit} from '@angular/core';
import {LocalstorageService} from "../../../../includes/services";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private localstorageService: LocalstorageService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  onLogout() {
    this.localstorageService.deleteAllLocalStorage();
    this.router.navigateByUrl('/auth')
  }
}
