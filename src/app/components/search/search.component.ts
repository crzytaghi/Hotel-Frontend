import { Component, OnInit } from '@angular/core';
import { RoomService } from 'src/app/services/room.service';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  rooms: any;
  public reservations: any;
  checkIn: Date;
  checkOut: Date;
  constructor(
    private roomService: RoomService, 
    private reservationService: ReservationService
    ) { }

    // Access the reservations database to determine if there are conflicting dates. 
  ngOnInit() {
    this.reservationService.getReservations().subscribe((response) => {
      this.reservations = response;
      console.log(this.reservations);
    })
  }

  // The search function will run once the search button is clicked, and will access all of the data in the rooms DB. First, determine if the room is in the reservations table. If so, check the dates for that room. If the date range requested is outside of the date range in the reservation table, display that room. Else, do not display that room. 
  search() {

    if (this.checkIn && this.checkOut) {
      this.roomService.getRooms().subscribe((response) => {
        this.rooms = response;
      })

      for (let i = 0; i < this.reservations.length; i++) {
        console.log(this.reservations[i]);
        console.log(this.reservations[i].check_in);
        console.log(this.reservations[i].check_out);
        if (this.checkOut < this.reservations[i].check_in || this.checkIn > this.reservations[i].check_out) {
          console.log(`Date range works for room ${this.reservations[i].room_number}`);
          i++;
        } else if (this.reservations[i].check_in < this.checkIn && this.checkIn < this.reservations[i].check_out) {
          console.log(`${this.checkIn} is within a current reservation and room ${this.reservations[i].room_number} is not available`);
          i++;
        } else {
          console.log(`Room ${this.reservations[i].room_number} is available for reservation on all dates`);
          
        }
      }

    } else {
      window.alert(`Check-In & Check-Out Required!`)
    }
    
    
  }

  // When the user clicks on the reserve button, the room_number as well as the checkIn and checkOut data should be added to the reservation table
  reserve(room) {
    this.reservationService.reserve(room.room_number, this.checkIn, this.checkOut).subscribe((response) => {
       console.log(response);
    })  
  }

}
