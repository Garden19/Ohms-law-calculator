import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Battery } from '../models/battery';
@Injectable({
  providedIn: 'root',
})
export class BatteryService {
  private http = inject(HttpClient);

  baseURL: string = 'http://localhost:5044';
  
  getBatteries(){
    return this.http.get<Battery[]>(`${this.baseURL}/batteries`)
  }
}
