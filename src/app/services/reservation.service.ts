import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //Inject HttpClient as a dependency
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private API_HOST = environment.apiHost;
  private RESERVATIONS = `${this.API_HOST}/reservations`

  constructor(private http: HttpClient) { }

  getReservations() {
    return this.http.get(this.RESERVATIONS);
  }

  // Delete the specific reservation based on the ID at that index, pulled from the reservation parameter
  deleteReservation(reservation) {
    console.log(reservation);
    
    const url = `${this.RESERVATIONS}/${reservation}`;
    console.log(url);

    return this.http.delete(url);
  }

  updateReservation(reservation, roomNumber, checkIn, checkOut) {
    // reservation is the ID of the reservation
    console.log(roomNumber);
    console.log(checkIn);
    console.log(checkOut);
    
    const url = `${this.RESERVATIONS}/${reservation}`;
    // Create a variable called body that contains all of the information needed to update the current reservation
    const body = {
      room_number: roomNumber,
      check_in: checkIn,
      check_out: checkOut
    };
    return this.http.put(url, body);
  }

  // POST
  reserve(roomNumber, checkIn, checkOut) {
    const body = {
      room_number: roomNumber,
      check_in: checkIn,
      check_out: checkOut
    };
    return this.http.post(this.RESERVATIONS,body);
  }
  
}
