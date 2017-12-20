import { Component} from '@angular/core';
import {Response} from '@angular/http';
import {UsersService} from '../../Global/services/users.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent {

    title = 'app';
    public id = 0;
    public names;
    public page = 0;

    constructor(private usersService: UsersService) {
        this.next();
    }


    next() {
        this.page = this.page + 1;
        this.usersService.getUsers(this.id)
            .subscribe(
                (response: Response) => {
                    const data = response.json();
                    console.log(data);
                    this.names = data;
                }
            );
        this.id += 15;

    }

    previous() {
        this.id -= 15;
        this.page = this.page - 1;
        this.usersService.getUsers(this.id)
            .subscribe(
                (response: Response) => {
                    const data = response.json();
                    console.log(data);
                    this.names = data;
                }
            );
    }
}
