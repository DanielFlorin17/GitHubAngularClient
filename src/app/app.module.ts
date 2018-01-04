import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


import {AppComponent} from './app.component';
import {UsersService} from './Global/services/users.service';
import {HttpModule} from '@angular/http';
import {HomeComponent} from './Pages/home/home.component';
import {HeaderComponent} from './Global/header/header.component';
import {AllUsersComponent} from './Pages/all-users/all-users.component';
import { FilterPipe } from './Pages/all-users/filter.pipe';
import {FormsModule} from '@angular/forms';

const appRoutes: Routes = [
    {path: 'homepage', component: HomeComponent},
    {path: 'allusers', component: AllUsersComponent}
    ];

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        HeaderComponent,
        AllUsersComponent,
        FilterPipe
    ],
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [UsersService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
