import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit {
  reservations: any;

  constructor(
    private http: HttpClient,
    private reservationService: ReservationService) {

  }

  // Inject the getReservations API route from the reservationsService file
  ngOnInit() {
    this.reservationService.getReservations().subscribe((response) => {
      this.reservations = response;
    })
  }

  // Delete the current reservation, display a message to the user, then reload the page after waiting 1 second. 
  delete(reservation) {
    this.reservationService.deleteReservation(reservation.reservation_id).subscribe();
    window.alert(`Room ${reservation.room_number} Deleted! Click Ok to reload the page`);
    setTimeout(function(){window.location.reload()},500);
  }

  public showUpdateForm: boolean = false;

  toggleUpdate(room) {
    this.showUpdateForm = !this.showUpdateForm;
    console.log(this.showUpdateForm);
    console.log(room);
    
  }

  update(reservation) {
    this.reservationService.updateReservation(reservation.reservation_id, reservation.room_number, reservation.check_in, reservation.check_out).subscribe((response) => {
      console.log(`PUT request successful, ${response}`);
    })
    console.log(reservation);
    window.location.reload();
  }
}
