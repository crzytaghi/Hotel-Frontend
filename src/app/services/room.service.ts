import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //Inject HttpClient as a dependency
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  // Import the apiHost from the environment file. Enables Angular to run the local api or production based on the ng build
  private API_HOST = environment.apiHost;
  private ROOMS = `${this.API_HOST}/rooms`;

  constructor(private http: HttpClient) { }

  getRooms() {
    return this.http.get(this.ROOMS);
  }
}
