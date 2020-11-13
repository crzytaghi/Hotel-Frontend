import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //Inject HttpClient as a dependency
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private API_HOST = environment.apiHost;
  private RESERVATIONS = `${this.API_HOST}/reservations/`

  private reservationsURL = 'postgres://rzvpluvufnhwxn:392c9a5622ec268f75a3d76eadd45a206d13dfa39138ac531c687e6c56789509@ec2-52-71-85-210.compute-1.amazonaws.com:5432/dfh5t3jjlugdgu'; //URL to database

  private localHost = '/reservations';

  constructor(private http: HttpClient) { }

  getReservations() {
    return this.http.get(this.RESERVATIONS);
  }

  // NEED TO COMPLETE DELETE AND UPDATE ROUTES

  deleteReservation(reservation) {
    console.log(reservation);
    
    const url = `${this.RESERVATIONS}/${reservation}`;
    console.log(url);

    return this.http.delete(url);
  }

  updateReservation(reservation, roomNumber, checkIn, checkOut) {
    console.log(reservation);
    console.log(roomNumber);
    console.log(checkIn);
    console.log(checkOut);
    
    const url = `${this.RESERVATIONS}/${reservation}`;
    const body = {
      room_number: roomNumber,
      check_in: checkIn,
      check_out: checkOut
    };
    return this.http.put(url, body);
  }

  reserve(roomNumber, checkIn, checkOut) {
    const body = {
      room_number: roomNumber,
      check_in: checkIn,
      check_out: checkOut
    };
    return this.http.post(this.RESERVATIONS,body);
  }
  
}
