import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TimelineService {
  private apiurl = environment.apiurl;

  constructor(private http: HttpClient) {}

  listTimelines():Observable<any[]> {
    return this.http.get<any[]>(`${this.apiurl}api/timelines`);
  }

  getTimeline(id: string) {
    return this.http.get(`${this.apiurl}api/timelines/${id}`);
  }
}
