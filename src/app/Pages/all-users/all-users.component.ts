import {Component} from '@angular/core';
import {Response} from '@angular/http';
import {UsersService} from '../../Global/services/users.service';
import {Router} from '@angular/router';


@Component({
    selector: 'app-all-users',
    templateUrl: './all-users.component.html',
    styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent {

    title = 'app';
    public id = 0;
    public names = [];
    public allusers = [];
    public page = 0;
    filteredName = '';
    propName = 'login';

    constructor(private usersService: UsersService,
                private router: Router) {
        this.first();
    }


        next() {
        this.page = this.page + 1;
        this.id = this.id + 46;
        this.usersService.getUsers(this.id)
            .subscribe(
                (response: Response) => {
                    const data = response.json();
                    console.log(data);
                    this.names = data;
                }
            );
    }

    previous() {
        this.id = this.id - 46;
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

    first() {
        this.usersService.getUsers(0)
            .subscribe(
                (response: Response) => {
                    const data = response.json();
                    console.log(data);
                    this.names = data;
                }
            );
    }

    search() {
        this.router.navigate(['search']);
    }

    addToFavorite() {
        console.log('It worked!');
    }
}




