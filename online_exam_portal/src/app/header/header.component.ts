import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  userName: string = '';
  constructor(private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.userName = history.state.userName;
  }

  logOut() {
    this.toastr.success('Logout Successful', '', {
      timeOut: 5000,
      positionClass: 'toast-top-right',
      closeButton: true,
    });
    this.router.navigateByUrl('/login');
  }
}
