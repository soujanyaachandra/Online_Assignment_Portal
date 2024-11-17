import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.valid) {
      const template = {
        user_email: this.loginForm.value.email,
        user_password: this.loginForm.value.password
      }
      this.toastr.success('Login Successful', '', {
        timeOut: 5000,
        positionClass: 'toast-top-right',
        closeButton: true,
      });
      this.router.navigateByUrl('/guide-lines');
    }
    else
      return;
  }
}
