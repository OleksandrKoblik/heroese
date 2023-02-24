import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

import {EMAIL_PATTERN} from "../../core/constants/reg-exp";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginFormGroup: FormGroup = new FormGroup('');

  constructor(
    public fb: FormBuilder,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.loginFormGroup = this.fb.group({
      email: new FormControl<string>('', [
        Validators.required,
        Validators.pattern(EMAIL_PATTERN)]),
      password: new FormControl<string>('', [
        Validators.required,
        Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[^\\da-zA-Z]).{6,}$")]),
    })
  }

  public login(): void {
    if (this.loginFormGroup.valid) {
      const payload = {
        email: this.loginFormGroup.get('email')!.value,
        password: this.loginFormGroup.get('password')!.value,
      };

      const registeredUsers = JSON.parse(localStorage.getItem('users') || '');
      const authUser = registeredUsers.find((users: { email: string, password: string }) => users.email === payload.email &&
        users.password === payload.password)
      if (authUser) {
        localStorage.setItem('session', JSON.stringify(authUser));
        this.router.navigate(['home'])
      } else {
        alert('Error: This user does not exist!')
      }
    }
  }
}
