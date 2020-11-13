import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReservationDetailsComponent } from './components/reservation-details/reservation-details.component';
import { ReservationListComponent } from './components/reservation-list/reservation-list.component';
import { SearchComponent } from './components/search/search.component';


/* This is where you configure your routes and the 'URLs' for each. Component is the component to render once that path is hit. */
const routes: Routes = [
  { path: 'reservations', component: ReservationListComponent },
  { path: 'reservations/:id', component: ReservationDetailsComponent },
  { path: 'search', component: SearchComponent },
  { path: '', redirectTo: '/search', pathMatch: 'full' },
];

/* The @NgModule metatdata initilializes the router and starts listening for browser location changes. The following line adds the RouterModule to the AppRoutingModule imports array and configures it with the routes in one step by calling RouterModule.forRoot(). The methos id called forRoot() because you config the router at the applications root level. The forRoot() method suuplies the serviecs providers and directives needed for routing, and performs the initial navigation based on the currnet browser URL. */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
