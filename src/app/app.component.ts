import {Component} from '@angular/core';
import {UsersService} from './services/users.service';
import {Response} from '@angular/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';
    public id = 0;
    public names;

    constructor(private usersService: UsersService) {
        this.AllUsers();
    }


    AllUsers() {
        this.usersService.getUsers(this.id)
            .subscribe(
                (response: Response) => {
                    const data = response.json();
                    console.log(data);
                    this.names = data;
                }
            );
        this.id += 30;
    }

}

