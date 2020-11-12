import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css']
})
export class RoomsListComponent implements OnInit {

  rooms: any;
  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.http.get('http://localhost:3000/rooms').subscribe((response) => {
      this.rooms = response;
    })
  }

}
