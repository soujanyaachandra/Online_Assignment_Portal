import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.signupForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      city: ['', Validators.required],
      zipcode: ['', Validators.required]
    });
  }

  get f() { return this.signupForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.signupForm.valid) {
      const template = {
        user_firstname: this.signupForm.value.firstName,
        user_email: this.signupForm.value.email,
        user_phone: this.signupForm.value.phone,
        user_password: this.signupForm.value.password,
        user_lastname: this.signupForm.value.lastName,
        user_city: this.signupForm.value.city,
        user_zipcode: this.signupForm.value.zipcode,
      }
      Swal.fire({
        title: "Good job!",
        text: "Your account has been created successfully!",
        icon: "success"
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigateByUrl('/login');
          this.signupForm.reset();
        }
      });
    }
    else
      return;
  }
}
