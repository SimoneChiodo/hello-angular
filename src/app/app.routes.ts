import { Routes } from '@angular/router';

// Pages
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutMeComponent } from './about-me/about-me.component';


export const routes: Routes = [  
    { path: "/home", component: HomeComponent },
    { path: "/services", component: ServicesComponent },
    { path: "/about-me", component: AboutMeComponent },
    { path: "/contacts", component: ContactsComponent },
];
