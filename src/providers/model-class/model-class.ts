export class Meteo {
    coord: Coord;
    weather: Weather;
    base: string;
    main: Main;
    visibility: number;
    wind: File[];
    clouds: File[];
    dt: number;
    sys;
    id: number;
    name: string;
    cod: string;
}

export class Coord {
    lat: number;
    lon: number;
}

export class Weather {
    id: number;
    main: string;
    description: string;
    icon: string;

}

export class Main {
    temp : number;
    pressure: number;
    humidity: number;
}