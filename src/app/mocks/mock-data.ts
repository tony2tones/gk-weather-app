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

    public static mockResponse = {
        "city": {
          "id": 3363983,
          "name": "Montague Gardens",
          "coord": { "lon": 18.5046, "lat": -33.8702 },
          "country": "ZA",
          "population": 0,
          "timezone": 7200
        },
        "cod": "200",
        "message": 4.2036738,
        "cnt": 7,
        "list": [
          {
            "dt": 1644750000,
            "sunrise": 1644725961,
            "sunset": 1644774075,
            "temp": {
              "day": 299.13,
              "min": 293.07,
              "max": 299.17,
              "night": 293.87,
              "eve": 294.92,
              "morn": 293.33
            },
            "feels_like": {
              "day": 299.13,
              "night": 294.11,
              "eve": 295.16,
              "morn": 293.54
            },
            "pressure": 1013,
            "humidity": 52,
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "sky is clear",
                "icon": "01d"
              }
            ],
            "speed": 9.68,
            "deg": 170,
            "gust": 14.55,
            "clouds": 5,
            "pop": 0.06
          },
          {
            "dt": 1644836400,
            "sunrise": 1644812419,
            "sunset": 1644860415,
            "temp": {
              "day": 302.98,
              "min": 292.12,
              "max": 303.82,
              "night": 297.29,
              "eve": 300.66,
              "morn": 292.57
            },
            "feels_like": {
              "day": 302.87,
              "night": 297.35,
              "eve": 301.15,
              "morn": 292.68
            },
            "pressure": 1010,
            "humidity": 42,
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "sky is clear",
                "icon": "01d"
              }
            ],
            "speed": 6.29,
            "deg": 154,
            "gust": 10.05,
            "clouds": 0,
            "pop": 0
          },
          {
            "dt": 1644922800,
            "sunrise": 1644898876,
            "sunset": 1644946754,
            "temp": {
              "day": 298.17,
              "min": 293.39,
              "max": 299.98,
              "night": 293.39,
              "eve": 295.09,
              "morn": 294.55
            },
            "feels_like": {
              "day": 298.37,
              "night": 293.74,
              "eve": 295.32,
              "morn": 294.6
            },
            "pressure": 1012,
            "humidity": 63,
            "weather": [
              {
                "id": 801,
                "main": "Clouds",
                "description": "few clouds",
                "icon": "02d"
              }
            ],
            "speed": 6.4,
            "deg": 171,
            "gust": 9.31,
            "clouds": 19,
            "pop": 0.02
          },
          {
            "dt": 1645009200,
            "sunrise": 1644985333,
            "sunset": 1645033092,
            "temp": {
              "day": 295.55,
              "min": 291.26,
              "max": 295.55,
              "night": 291.26,
              "eve": 292.63,
              "morn": 293.13
            },
            "feels_like": {
              "day": 295.36,
              "night": 290.98,
              "eve": 292.38,
              "morn": 293.25
            },
            "pressure": 1018,
            "humidity": 58,
            "weather": [
              {
                "id": 802,
                "main": "Clouds",
                "description": "scattered clouds",
                "icon": "03d"
              }
            ],
            "speed": 9.71,
            "deg": 166,
            "gust": 11.57,
            "clouds": 39,
            "pop": 0
          },
          {
            "dt": 1645095600,
            "sunrise": 1645071789,
            "sunset": 1645119429,
            "temp": {
              "day": 299.49,
              "min": 289.58,
              "max": 299.49,
              "night": 292.86,
              "eve": 295.86,
              "morn": 291.63
            },
            "feels_like": {
              "day": 299.49,
              "night": 292.61,
              "eve": 295.67,
              "morn": 291.2
            },
            "pressure": 1013,
            "humidity": 44,
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "sky is clear",
                "icon": "01d"
              }
            ],
            "speed": 7.1,
            "deg": 174,
            "gust": 9.55,
            "clouds": 0,
            "pop": 0
          },
          {
            "dt": 1645182000,
            "sunrise": 1645158245,
            "sunset": 1645205764,
            "temp": {
              "day": 301.14,
              "min": 290.24,
              "max": 301.14,
              "night": 294.74,
              "eve": 296.29,
              "morn": 292.85
            },
            "feels_like": {
              "day": 301.02,
              "night": 294.81,
              "eve": 296.36,
              "morn": 292.57
            },
            "pressure": 1009,
            "humidity": 43,
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "sky is clear",
                "icon": "01d"
              }
            ],
            "speed": 3.94,
            "deg": 213,
            "gust": 5.5,
            "clouds": 1,
            "pop": 0
          },
          {
            "dt": 1645264800,
            "sunrise": 1645244700,
            "sunset": 1645292099,
            "temp": {
              "day": 295.66,
              "min": 291.63,
              "max": 296.98,
              "night": 291.63,
              "eve": 295.91,
              "morn": 292.28
            },
            "feels_like": {
              "day": 295.85,
              "night": 291.67,
              "eve": 295.91,
              "morn": 292.55
            },
            "pressure": 1012,
            "humidity": 72,
            "weather": [
              {
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04d"
              }
            ],
            "speed": 6.15,
            "deg": 180,
            "gust": 7.84,
            "clouds": 62,
            "pop": 0.02
          }
        ]
      }
      
}
