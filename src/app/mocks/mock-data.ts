import { HttpErrorResponse, HttpEventType, HttpHeaders } from "@angular/common/http";

/* istanbul ignore file */
export class Mocks {
    public static errorResponse:HttpErrorResponse = {
      error: '',
      ok: false,
      name: 'HttpErrorResponse',
      statusText: 'this is a test error message',
      message: "",
      headers: new HttpHeaders,
      status: 0,
      url: "",
      type: HttpEventType.ResponseHeader
    };
    public static mockData = {
        "city": {
            "id": 3367573,
            "name": "Goodwood",
            "coord": { lon: 18.5598, lat: -33.9247 },
            "country": "ZA",
            "population": 0,
            "timezone": 7200
        },
        "cod": 200,
        "message": 9.0486585,
        "cnt": 7,
        "list": [
            {
                "dt": 1644490800,
                "sunrise": 1644466568,
                "sunset": 1644515039,
                "temp": {
                    "day": 297.73,
                    "min": 291.87,
                    "max": 297.9,
                    "night": 291.87,
                    "eve": 293.29,
                    "morn": 292
                },
                "feels_like": {
                    "day": 297.55,
                    "night": 291.47,
                    "eve": 292.85,
                    "morn": 292.19
                },
                "pressure": 1013,
                "humidity": 50,
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "speed": 3.57,
                "deg": 241,
                "gust": 3.69,
                "clouds": 55,
                "pop": 0.3,
                "rain": 0.45
            },
            {
                "dt": 1644577200,
                "sunrise": 1644553027,
                "sunset": 1644601383,
                "temp": {
                    "day": 298.54,
                    "min": 289.85,
                    "max": 298.62,
                    "night": 292.53,
                    "eve": 294.97,
                    "morn": 290.56
                },
                "feels_like": {
                    "day": 298.41,
                    "night": 292.74,
                    "eve": 295.09,
                    "morn": 290.31
                },
                "pressure": 1013,
                "humidity": 49,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "sky is clear",
                        "icon": "01d"
                    }
                ],
                "speed": 4.98,
                "deg": 189,
                "gust": 8.46,
                "clouds": 1,
                "pop": 0
            },
            {
                "dt": 1644663600,
                "sunrise": 1644639485,
                "sunset": 1644687725,
                "temp": {
                    "day": 299.96,
                    "min": 291.36,
                    "max": 300.2,
                    "night": 294.4,
                    "eve": 294.68,
                    "morn": 292.1
                },
                "feels_like": {
                    "day": 300.39,
                    "night": 294.49,
                    "eve": 294.82,
                    "morn": 292.24
                },
                "pressure": 1012,
                "humidity": 50,
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03d"
                    }
                ],
                "speed": 5.56,
                "deg": 186,
                "gust": 8.66,
                "clouds": 41,
                "pop": 0
            },
            {
                "dt": 1644750000,
                "sunrise": 1644725943,
                "sunset": 1644774066,
                "temp": {
                    "day": 299.28,
                    "min": 292.88,
                    "max": 299.28,
                    "night": 292.88,
                    "eve": 293.98,
                    "morn": 294.99
                },
                "feels_like": {
                    "day": 299.28,
                    "night": 293.08,
                    "eve": 294.13,
                    "morn": 295.06
                },
                "pressure": 1013,
                "humidity": 50,
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03d"
                    }
                ],
                "speed": 8.65,
                "deg": 181,
                "gust": 12.2,
                "clouds": 25,
                "pop": 0
            },
            {
                "dt": 1644836400,
                "sunrise": 1644812401,
                "sunset": 1644860406,
                "temp": {
                    "day": 304.04,
                    "min": 291.32,
                    "max": 304.04,
                    "night": 296.93,
                    "eve": 298.48,
                    "morn": 293.96
                },
                "feels_like": {
                    "day": 303.78,
                    "night": 296.93,
                    "eve": 298.5,
                    "morn": 294.05
                },
                "pressure": 1010,
                "humidity": 39,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "sky is clear",
                        "icon": "01d"
                    }
                ],
                "speed": 5.21,
                "deg": 189,
                "gust": 7.3,
                "clouds": 3,
                "pop": 0
            },
            {
                "dt": 1644922800,
                "sunrise": 1644898858,
                "sunset": 1644946745,
                "temp": {
                    "day": 300.08,
                    "min": 293.38,
                    "max": 302,
                    "night": 293.38,
                    "eve": 294.48,
                    "morn": 295.73
                },
                "feels_like": {
                    "day": 300.75,
                    "night": 293.81,
                    "eve": 294.84,
                    "morn": 295.74
                },
                "pressure": 1013,
                "humidity": 54,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "sky is clear",
                        "icon": "01d"
                    }
                ],
                "speed": 6.82,
                "deg": 181,
                "gust": 10.55,
                "clouds": 6,
                "pop": 0.03
            },
            {
                "dt": 1645005600,
                "sunrise": 1644985315,
                "sunset": 1645033083,
                "temp": {
                    "day": 297.89,
                    "min": 292.6,
                    "max": 299.66,
                    "night": 293.87,
                    "eve": 297.97,
                    "morn": 292.6
                },
                "feels_like": {
                    "day": 298.06,
                    "night": 294.19,
                    "eve": 298.15,
                    "morn": 293
                },
                "pressure": 1016,
                "humidity": 63,
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "speed": 8.29,
                "deg": 177,
                "gust": 10.19,
                "clouds": 52,
                "pop": 0
            }
        ]
    }

    public static position = {
        coords : {
            "longitude": 18.5598,
            "latitude": -33.9247
        }
    }
}
