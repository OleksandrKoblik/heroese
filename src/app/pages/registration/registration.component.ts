import { Component, OnInit } from '@angular/core';

import {AuthUser} from "../../core/interfaces/main-interface";
import {EMAIL_PATTERN} from "../../core/constants/reg-exp";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  public registrationFormGroup: FormGroup = new FormGroup('');

  constructor(
    public fb: FormBuilder,
    private router: Router
  ) {
  }

  public ngOnInit(): void {
    this.registrationFormGroup = this.fb.group({
      email: new FormControl<string>('', [
        Validators.required,
        Validators.pattern(EMAIL_PATTERN)]),
      password: new FormControl<string>('', [
        Validators.required,
        Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[^\\da-zA-Z]).{6,}$")]),
      userName: new FormControl<string>('', [Validators.required]),
      confirmPassword: new FormControl<string>('', [
        Validators.required,
        Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[^\\da-zA-Z]).{6,}$")])
    })

  }

  public registration(): void {
    if (this.registrationFormGroup.valid) {
      const payload:AuthUser = {
        email: this.registrationFormGroup.get('email')?.value,
        password: this.registrationFormGroup.get('password')?.value,
        userName: this.registrationFormGroup.get('userName')?.value,
        confirmPassword: this.registrationFormGroup.get('confirmPassword')?.value,
      }
      if (payload.password === payload.confirmPassword) {
        if (localStorage.getItem('users')) {
          let users = JSON.parse(localStorage.getItem('users') || '');
          localStorage.setItem('users', JSON.stringify([...users, payload]))
        } else {
          localStorage.setItem('users', JSON.stringify([payload]))
        }
        this.router.navigate(['/login']);
      } else alert('Passwords do not match')
    }
  }
}
