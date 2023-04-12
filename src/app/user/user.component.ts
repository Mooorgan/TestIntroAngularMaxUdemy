import { Component } from '@angular/core';
import { UserService } from './user.service';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService, DataService],
})
export class UserComponent {
  constructor(
    private userService: UserService,
    private dataService: DataService
  ) {}
  user!: { name: string };
  isLoggedIn = false;
  data!: string;

  ngOnInit() {
    this.user = this.userService.user;
    this.dataService.getDetails().then((data) => {
      if (typeof data === 'string') {
        this.data = data;
      }
    });
  }
}
