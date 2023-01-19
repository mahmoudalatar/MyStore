import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StoreData {
  constructor(private _http: HttpClient) {}

  getData(): Observable<[]> {
    return this._http.get<[]>('../../assets/data.json');
  }
}
