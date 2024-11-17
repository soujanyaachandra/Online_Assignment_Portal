import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-name',
  templateUrl: './user-name.component.html',
  styleUrls: ['./user-name.component.scss'],
})
export class UserNameComponent {
  userName: string = '';

  constructor(private router: Router) { }

  onClickOfSubmit() {
    this.router.navigate(['/test'], { state: { userName: this.userName } });
  }
}
