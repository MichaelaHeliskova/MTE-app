import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable()
export class WeatherProvider {
  apikey = 'a7a5ec066e425e6b7ad10367d10cac89';
  url;

  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
    this.url = 'http://api.openweathermap.org/data/2.5/weather?APPID='+this.apikey+'&';
  }
  getWeather(city, state){
    return this.http.get(this.url+'q='+city+','+state);
  }
}
