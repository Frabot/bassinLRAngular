import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
/*
  Generated class for the ApiSymfonyProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiSymfonyProvider {

    //Meteo url
  private urlApiSymfonyBase = 'http://127.0.0.1:8000/';

  constructor(public http: HttpClient) {
    console.log('Hello ApiSymfonyProvider Provider');
  }

  getAllBateaux() {
      return new Promise(resolve => {
          this.http.get(this.urlApiSymfonyBase + 'bateaux').subscribe((data:any) =>{
              resolve(data);
          },err => {
              console.log(err);
          });
      });
  }

    getAllTemoins() {
        return new Promise(resolve => {
            this.http.get(this.urlApiSymfonyBase + 'temoins').subscribe((data:any) =>{
                resolve(data);
            },err => {
                console.log(err);
            });
        });
    }

    //Pour chercher les images de temoignages
    getAllTemoignages() {
        return new Promise(resolve => {
            this.http.get(this.urlApiSymfonyBase + 'galerietemoignages').subscribe((data:any) =>{
                resolve(data);
            },err => {
                console.log(err);
            });
        });
    }
}
