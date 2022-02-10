export interface Forecast {
    city: City;
    list: List[];
    day?:number;
}

export interface List {
    day: number;
    weather: Weather[];
    temp: Temp;
}

export interface Weather {
    description: string;
    icon: string;
    main: string;
}

export interface Temp {
    min: number;
    max: number;
    day: number;
}

export interface City {
    name: string;
    coord: Coord;
}
export interface Position {
    coords: Coord;
}

export interface Coord {
    longitude: number;
    latitude: number;
}