import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //Inject HttpClient as a dependency
import { environment } from 'src/environments/environment';

const API_HOST = environment.apiHost;
const ROOMS = `${API_HOST}/rooms/`;

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private http: HttpClient) { }

  getRooms() {
    return this.http.get(ROOMS);
  }
}
