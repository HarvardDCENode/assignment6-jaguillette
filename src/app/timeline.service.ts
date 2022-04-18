import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TimelineService {
  private apiurl = environment.apiurl;

  constructor(private http:HttpClient) { }

  listTimelines() {
    return this.http.get(`${this.apiurl}api/timelines`)
  }

  getTimeline(id:string) {
    return this.http.get(`${this.apiurl}api/timelines/${id}`)
  }
}
