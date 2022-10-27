import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {enviroment} from "../enviroment";
import {Observable} from "rxjs";
import {Tour} from "../tour";


const API_URL = `${enviroment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class TourService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Tour[]>{
    console.log("hello")
    return this.http.get<Tour[]>(API_URL + '/tours');
  }

  saveTour(tour: Tour): Observable<Tour>{
    return this.http.post<Tour>(API_URL + '/tours',tour);
  }

  findById(id: number): Observable<Tour>{
    return this.http.get<Tour>(`${API_URL}/tours/${id}`);
  }

  updateTour(id: number, tour: Tour): Observable<Tour>{
    return this.http.put<Tour>(`${API_URL}/tours/${id}`,tour);
  }

  deleteTour(id: number): Observable<Tour>{
    return this.http.delete<Tour>(`${API_URL}/tours/${id}`);
  }
}
