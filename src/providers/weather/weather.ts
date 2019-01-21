import { Http } from '@angular/http';;
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherProvider {
  apiKey = 'a7a5ec066e425e6b7ad10367d10cac89';
  url;

  constructor(public http: Http) {

    this.url = 'https://api.openweathermap.org/data/2.5/weather?appid=' + this.apiKey + '&units=metric'
  }

  getWeather(city, state){
    if(city != null && state != null){
      return this.http.get(this.url + '&q=' + city + ',' + state).map(res => res.json())
    }
  }

}
