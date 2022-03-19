import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {cred} from "../../../config/cred";
import {Router} from "@angular/router";
import {ToastService} from "../../../includes/services/toast.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  loginForm!: FormGroup;
  isSubmitted = false;

  validationMessages = {
    username: [
      {
        type: 'required',
        message: 'Username is required'
      },
      {
        type: 'email',
        message: 'Invalid mail address'
      }
    ],
    password: [
      {
        type: 'required',
        message: 'Password required'
      }
    ]

  }

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toast: ToastService
  ) {
  }

  ngOnInit(): void {
    this.initLoginForm();
  }

  initLoginForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.compose([
        Validators.required,
        Validators.email
      ])],
      password: ['', Validators.required]
    })
  }


  get lf() {
    return this.loginForm?.controls
  }

  get isValidForm() {
    return this.loginForm?.valid
  }


  onLogin() {
    this.isSubmitted = true;
    if (!this.isValidForm) {
      return
    }
    if (this.lf['username'].value === cred.username && this.lf['password'].value === cred.password) {

      this.router.navigateByUrl('/app/customer')
    } else {
      // error toast
      this.toast.error('Invalid username or password !')
    }
  }


}

