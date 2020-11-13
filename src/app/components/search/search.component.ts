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

  ngOnInit() {
    this.reservationService.getReservations().subscribe((response) => {
      this.reservations = response;
      console.log(this.reservations);
    })
  }

  // The search function will run once the search button is clicked, and will access all of the data in the rooms DB. First, determine if the room is in the reservations table. If so, check the date ranges to see if they are outside of the date range in the resveration table. Determine if the date range is available for that particular room. Loop through the reservations table, if checkIn
  search() {
    console.log(this.checkIn);
    console.log(this.checkOut);
    console.log(this.reservationService);
    console.log(this.reservations);
    console.log(this.reservations.check_in);
    console.log(this.reservations.check_out);
    
    this.roomService.getRooms().subscribe((response) => {
      this.rooms = response;
    })
  }

  // When the user clicks on the reserve button, the room_number as well as the checkIn and checkOut data should be added to the reservation table
  reserve(room) {
    this.reservationService.reserve(room.room_number, this.checkIn, this.checkOut).subscribe((response) => {
       console.log(response);
    })  
  }

}
