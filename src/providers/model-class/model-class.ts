import { Injectable } from '@angular/core';

@Injectable()
export class Meteo {
    constructor (
        public coord: Coord,
        public weather: Weather,
        public base: string,
        public main: Main,
        public visibility: number,
        public id: number,
        public name: string,
        public cod: string,
    ){ }
}

export class Coord {
    constructor (
        public lat: number,
        public lon: number,
    ){}
}

export class Weather {
    constructor (
        public id: number,
        public main: string,
        public description: string,
        public icon: string,
    ) {}

}

export class Main {
    constructor (
        public temp : number,
        public pressure: number,
        public humidity: number,
    ) {}
}


export class Bateau {
    constructor (
        public id: number,
        public nom: string,
        public annecreation: number,
        public histoire: string,
        public image: string,
        public lat: number,
        public lng: number,
        public temoins: Temoin
    ){}
}

export class Temoin {
    constructor (
        public id: number,
        public nom: string,
        public prenom: number,
        public profession: string,
        public photo_temoin: string,
        public temoignages: Temoignage
    ){}
}

export class Temoignage {
    constructor (
        public id: number,
        public titre: string,
        public photo_temoignage: number,
        public commentaire: string

    ){}
}