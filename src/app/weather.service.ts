import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private _http: HttpClient) { }
  private _url = "/assets/weather/weather.json";
  
    dailyForecast() {
      return this._http.get(this._url)
        // .pipe(map(result => result));
    }
}
