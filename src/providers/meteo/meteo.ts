import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Meteo } from "../model-class/model-class";

/*
  Generated class for the MeteoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MeteoProvider {

    //Meteo url
    private meteoServiceUrl = 'http://api.openweathermap.org/data/2.5/weather?id=6455645&units=metric&appid=beb6d67aa9bb26aa970e17c2da6a9bb4';

    constructor(public http: HttpClient) {
        console.log('Hello MeteoProvider Provider');
    }

    getMeteo():Promise<Meteo> {
        return new Promise(resolve => {
            this.http.get(this.meteoServiceUrl).subscribe((data: any) => {
                resolve(data);
            });
        });
    }

}
