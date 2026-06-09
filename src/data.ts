import type { Flight, Deal } from './types';

export const FLIGHTS: Flight[] = [
  {
    "id": "1",
    "from": "London (LHR)",
    "to": "Dallas (DFW)",
    "airline": "British Airways",
    "price": 762,
    "duration": "11h 55m",
    "stops": 0,
    "departureTime": "2026-06-09T16:00:00"
  },
  {
    "id": "2",
    "from": "London (LHR)",
    "to": "Kansas City (MCI)",
    "airline": "British Airways",
    "price": 723,
    "duration": "8h 1m",
    "stops": 1,
    "departureTime": "2026-06-24T10:00:00"
  },
  {
    "id": "3",
    "from": "Paris (CDG)",
    "to": "Miami (MIA)",
    "airline": "Air France",
    "price": 575,
    "duration": "11h 46m",
    "stops": 0,
    "departureTime": "2026-06-01T09:00:00"
  },
  {
    "id": "4",
    "from": "Paris (CDG)",
    "to": "Philadelphia (PHL)",
    "airline": "United Airlines",
    "price": 636,
    "duration": "10h 37m",
    "stops": 0,
    "departureTime": "2026-06-03T07:00:00"
  },
  {
    "id": "5",
    "from": "Paris (CDG)",
    "to": "Seattle (SEA)",
    "airline": "Air France",
    "price": 412,
    "duration": "10h 23m",
    "stops": 0,
    "departureTime": "2026-06-29T12:00:00"
  },
  {
    "id": "6",
    "from": "Paris (CDG)",
    "to": "Houston (IAH)",
    "airline": "Air France",
    "price": 461,
    "duration": "11h 35m",
    "stops": 0,
    "departureTime": "2026-06-27T22:00:00"
  },
  {
    "id": "7",
    "from": "Madrid (MAD)",
    "to": "San Francisco (SFO)",
    "airline": "Iberia",
    "price": 768,
    "duration": "8h 54m",
    "stops": 0,
    "departureTime": "2026-06-11T12:00:00"
  },
  {
    "id": "8",
    "from": "Madrid (MAD)",
    "to": "Dallas (DFW)",
    "airline": "Iberia",
    "price": 691,
    "duration": "8h 17m",
    "stops": 1,
    "departureTime": "2026-06-03T22:00:00"
  },
  {
    "id": "9",
    "from": "Madrid (MAD)",
    "to": "Boston (BOS)",
    "airline": "Iberia",
    "price": 452,
    "duration": "11h 40m",
    "stops": 0,
    "departureTime": "2026-06-09T21:00:00"
  },
  {
    "id": "10",
    "from": "Madrid (MAD)",
    "to": "Seattle (SEA)",
    "airline": "Iberia",
    "price": 587,
    "duration": "9h 43m",
    "stops": 0,
    "departureTime": "2026-06-01T08:00:00"
  },
  {
    "id": "11",
    "from": "Berlin (BER)",
    "to": "Boston (BOS)",
    "airline": "Lufthansa",
    "price": 696,
    "duration": "8h 21m",
    "stops": 1,
    "departureTime": "2026-06-04T08:00:00"
  },
  {
    "id": "12",
    "from": "Berlin (BER)",
    "to": "New York (JFK)",
    "airline": "Lufthansa",
    "price": 515,
    "duration": "11h 23m",
    "stops": 1,
    "departureTime": "2026-06-26T15:00:00"
  },
  {
    "id": "13",
    "from": "Berlin (BER)",
    "to": "Miami (MIA)",
    "airline": "Lufthansa",
    "price": 760,
    "duration": "10h 35m",
    "stops": 0,
    "departureTime": "2026-06-04T20:00:00"
  },
  {
    "id": "14",
    "from": "Rome (FCO)",
    "to": "Houston (IAH)",
    "airline": "ITA Airways",
    "price": 473,
    "duration": "8h 0m",
    "stops": 0,
    "departureTime": "2026-06-11T11:00:00"
  },
  {
    "id": "15",
    "from": "Rome (FCO)",
    "to": "Boston (BOS)",
    "airline": "United Airlines",
    "price": 655,
    "duration": "9h 58m",
    "stops": 0,
    "departureTime": "2026-06-21T18:00:00"
  },
  {
    "id": "16",
    "from": "Rome (FCO)",
    "to": "Seattle (SEA)",
    "airline": "United Airlines",
    "price": 710,
    "duration": "10h 43m",
    "stops": 0,
    "departureTime": "2026-06-02T15:00:00"
  },
  {
    "id": "17",
    "from": "Rome (FCO)",
    "to": "Dallas (DFW)",
    "airline": "ITA Airways",
    "price": 579,
    "duration": "8h 30m",
    "stops": 0,
    "departureTime": "2026-06-12T06:00:00"
  },
  {
    "id": "18",
    "from": "Amsterdam (AMS)",
    "to": "Kansas City (MCI)",
    "airline": "United Airlines",
    "price": 448,
    "duration": "10h 21m",
    "stops": 0,
    "departureTime": "2026-06-29T07:00:00"
  },
  {
    "id": "19",
    "from": "Amsterdam (AMS)",
    "to": "Atlanta (ATL)",
    "airline": "KLM",
    "price": 535,
    "duration": "9h 35m",
    "stops": 0,
    "departureTime": "2026-06-26T14:00:00"
  },
  {
    "id": "20",
    "from": "Lisbon (LIS)",
    "to": "Houston (IAH)",
    "airline": "United Airlines",
    "price": 693,
    "duration": "9h 51m",
    "stops": 1,
    "departureTime": "2026-06-24T11:00:00"
  },
  {
    "id": "21",
    "from": "Lisbon (LIS)",
    "to": "Los Angeles (LAX)",
    "airline": "TAP Air Portugal",
    "price": 738,
    "duration": "7h 53m",
    "stops": 1,
    "departureTime": "2026-06-18T14:00:00"
  },
  {
    "id": "22",
    "from": "Dublin (DUB)",
    "to": "Los Angeles (LAX)",
    "airline": "Aer Lingus",
    "price": 613,
    "duration": "10h 48m",
    "stops": 0,
    "departureTime": "2026-06-25T20:00:00"
  },
  {
    "id": "23",
    "from": "Dublin (DUB)",
    "to": "San Francisco (SFO)",
    "airline": "Aer Lingus",
    "price": 475,
    "duration": "11h 44m",
    "stops": 1,
    "departureTime": "2026-06-02T15:00:00"
  },
  {
    "id": "24",
    "from": "Dublin (DUB)",
    "to": "Atlanta (ATL)",
    "airline": "United Airlines",
    "price": 449,
    "duration": "9h 10m",
    "stops": 0,
    "departureTime": "2026-06-05T18:00:00"
  },
  {
    "id": "25",
    "from": "Dublin (DUB)",
    "to": "Seattle (SEA)",
    "airline": "Aer Lingus",
    "price": 790,
    "duration": "7h 47m",
    "stops": 0,
    "departureTime": "2026-06-10T22:00:00"
  },
  {
    "id": "26",
    "from": "Buenos Aires (EZE)",
    "to": "Miami (MIA)",
    "airline": "United Airlines",
    "price": 613,
    "duration": "6h 1m",
    "stops": 1,
    "departureTime": "2026-06-16T19:00:00"
  },
  {
    "id": "27",
    "from": "Buenos Aires (EZE)",
    "to": "Kansas City (MCI)",
    "airline": "Aerolineas Argentinas",
    "price": 881,
    "duration": "10h 15m",
    "stops": 0,
    "departureTime": "2026-06-18T15:00:00"
  },
  {
    "id": "28",
    "from": "Buenos Aires (EZE)",
    "to": "Boston (BOS)",
    "airline": "Aerolineas Argentinas",
    "price": 653,
    "duration": "11h 14m",
    "stops": 0,
    "departureTime": "2026-06-26T10:00:00"
  },
  {
    "id": "29",
    "from": "Sao Paulo (GRU)",
    "to": "Los Angeles (LAX)",
    "airline": "LATAM",
    "price": 759,
    "duration": "8h 48m",
    "stops": 1,
    "departureTime": "2026-06-13T09:00:00"
  },
  {
    "id": "30",
    "from": "Sao Paulo (GRU)",
    "to": "Boston (BOS)",
    "airline": "LATAM",
    "price": 695,
    "duration": "9h 18m",
    "stops": 1,
    "departureTime": "2026-06-09T13:00:00"
  },
  {
    "id": "31",
    "from": "Sao Paulo (GRU)",
    "to": "Atlanta (ATL)",
    "airline": "LATAM",
    "price": 520,
    "duration": "7h 47m",
    "stops": 1,
    "departureTime": "2026-06-20T21:00:00"
  },
  {
    "id": "32",
    "from": "Santiago (SCL)",
    "to": "Houston (IAH)",
    "airline": "LATAM",
    "price": 827,
    "duration": "11h 22m",
    "stops": 0,
    "departureTime": "2026-06-29T15:00:00"
  },
  {
    "id": "33",
    "from": "Santiago (SCL)",
    "to": "Seattle (SEA)",
    "airline": "LATAM",
    "price": 639,
    "duration": "9h 12m",
    "stops": 1,
    "departureTime": "2026-06-06T07:00:00"
  },
  {
    "id": "34",
    "from": "Santiago (SCL)",
    "to": "Dallas (DFW)",
    "airline": "LATAM",
    "price": 536,
    "duration": "12h 28m",
    "stops": 0,
    "departureTime": "2026-06-15T17:00:00"
  },
  {
    "id": "35",
    "from": "Santiago (SCL)",
    "to": "Boston (BOS)",
    "airline": "LATAM",
    "price": 880,
    "duration": "8h 42m",
    "stops": 1,
    "departureTime": "2026-06-01T20:00:00"
  },
  {
    "id": "36",
    "from": "Bogota (BOG)",
    "to": "Los Angeles (LAX)",
    "airline": "Avianca",
    "price": 759,
    "duration": "8h 59m",
    "stops": 0,
    "departureTime": "2026-06-19T12:00:00"
  },
  {
    "id": "37",
    "from": "Bogota (BOG)",
    "to": "Atlanta (ATL)",
    "airline": "Avianca",
    "price": 802,
    "duration": "10h 34m",
    "stops": 0,
    "departureTime": "2026-06-09T12:00:00"
  },
  {
    "id": "38",
    "from": "Lima (LIM)",
    "to": "Seattle (SEA)",
    "airline": "LATAM",
    "price": 570,
    "duration": "10h 46m",
    "stops": 1,
    "departureTime": "2026-06-28T12:00:00"
  },
  {
    "id": "39",
    "from": "Lima (LIM)",
    "to": "Atlanta (ATL)",
    "airline": "LATAM",
    "price": 569,
    "duration": "9h 12m",
    "stops": 1,
    "departureTime": "2026-06-11T22:00:00"
  },
  {
    "id": "40",
    "from": "Mexico City (MEX)",
    "to": "Boston (BOS)",
    "airline": "Aeromexico",
    "price": 445,
    "duration": "4h 56m",
    "stops": 0,
    "departureTime": "2026-06-05T18:00:00"
  },
  {
    "id": "41",
    "from": "Mexico City (MEX)",
    "to": "Los Angeles (LAX)",
    "airline": "United Airlines",
    "price": 429,
    "duration": "5h 49m",
    "stops": 1,
    "departureTime": "2026-06-19T12:00:00"
  },
  {
    "id": "42",
    "from": "Mexico City (MEX)",
    "to": "Kansas City (MCI)",
    "airline": "United Airlines",
    "price": 293,
    "duration": "2h 31m",
    "stops": 0,
    "departureTime": "2026-06-28T07:00:00"
  },
  {
    "id": "43",
    "from": "Guadalajara (GDL)",
    "to": "San Francisco (SFO)",
    "airline": "Volaris",
    "price": 243,
    "duration": "5h 41m",
    "stops": 1,
    "departureTime": "2026-06-10T12:00:00"
  },
  {
    "id": "44",
    "from": "Guadalajara (GDL)",
    "to": "Philadelphia (PHL)",
    "airline": "Volaris",
    "price": 333,
    "duration": "3h 50m",
    "stops": 0,
    "departureTime": "2026-06-15T19:00:00"
  },
  {
    "id": "45",
    "from": "Monterrey (MTY)",
    "to": "Kansas City (MCI)",
    "airline": "VivaAerobus",
    "price": 233,
    "duration": "3h 5m",
    "stops": 0,
    "departureTime": "2026-06-21T16:00:00"
  },
  {
    "id": "46",
    "from": "Monterrey (MTY)",
    "to": "Atlanta (ATL)",
    "airline": "VivaAerobus",
    "price": 463,
    "duration": "2h 32m",
    "stops": 0,
    "departureTime": "2026-06-03T20:00:00"
  },
  {
    "id": "47",
    "from": "Tokyo (NRT)",
    "to": "Atlanta (ATL)",
    "airline": "JAL",
    "price": 869,
    "duration": "17h 40m",
    "stops": 0,
    "departureTime": "2026-06-25T20:00:00"
  },
  {
    "id": "48",
    "from": "Tokyo (NRT)",
    "to": "Philadelphia (PHL)",
    "airline": "JAL",
    "price": 1124,
    "duration": "13h 28m",
    "stops": 0,
    "departureTime": "2026-06-21T18:00:00"
  },
  {
    "id": "49",
    "from": "Tokyo (NRT)",
    "to": "Los Angeles (LAX)",
    "airline": "United Airlines",
    "price": 1285,
    "duration": "12h 13m",
    "stops": 1,
    "departureTime": "2026-06-07T22:00:00"
  },
  {
    "id": "50",
    "from": "Tokyo (NRT)",
    "to": "Miami (MIA)",
    "airline": "JAL",
    "price": 1221,
    "duration": "16h 55m",
    "stops": 0,
    "departureTime": "2026-06-04T13:00:00"
  },
  {
    "id": "51",
    "from": "Seoul (ICN)",
    "to": "New York (JFK)",
    "airline": "Korean Air",
    "price": 1036,
    "duration": "14h 50m",
    "stops": 1,
    "departureTime": "2026-06-07T16:00:00"
  },
  {
    "id": "52",
    "from": "Seoul (ICN)",
    "to": "Los Angeles (LAX)",
    "airline": "Korean Air",
    "price": 1127,
    "duration": "14h 29m",
    "stops": 0,
    "departureTime": "2026-06-01T15:00:00"
  },
  {
    "id": "53",
    "from": "Seoul (ICN)",
    "to": "Seattle (SEA)",
    "airline": "United Airlines",
    "price": 1345,
    "duration": "15h 50m",
    "stops": 0,
    "departureTime": "2026-06-17T10:00:00"
  },
  {
    "id": "54",
    "from": "Dubai (DXB)",
    "to": "Seattle (SEA)",
    "airline": "Emirates",
    "price": 1280,
    "duration": "12h 1m",
    "stops": 0,
    "departureTime": "2026-06-09T20:00:00"
  },
  {
    "id": "55",
    "from": "Dubai (DXB)",
    "to": "Philadelphia (PHL)",
    "airline": "Emirates",
    "price": 869,
    "duration": "12h 15m",
    "stops": 1,
    "departureTime": "2026-06-17T12:00:00"
  },
  {
    "id": "56",
    "from": "Dubai (DXB)",
    "to": "Atlanta (ATL)",
    "airline": "Emirates",
    "price": 1121,
    "duration": "12h 55m",
    "stops": 0,
    "departureTime": "2026-06-19T10:00:00"
  },
  {
    "id": "57",
    "from": "Dubai (DXB)",
    "to": "San Francisco (SFO)",
    "airline": "Emirates",
    "price": 1290,
    "duration": "14h 39m",
    "stops": 0,
    "departureTime": "2026-06-12T14:00:00"
  },
  {
    "id": "58",
    "from": "Doha (DOH)",
    "to": "Houston (IAH)",
    "airline": "Qatar Airways",
    "price": 1334,
    "duration": "15h 25m",
    "stops": 0,
    "departureTime": "2026-06-01T13:00:00"
  },
  {
    "id": "59",
    "from": "Doha (DOH)",
    "to": "San Francisco (SFO)",
    "airline": "Qatar Airways",
    "price": 821,
    "duration": "15h 20m",
    "stops": 1,
    "departureTime": "2026-06-01T22:00:00"
  },
  {
    "id": "60",
    "from": "Doha (DOH)",
    "to": "New York (JFK)",
    "airline": "Qatar Airways",
    "price": 1254,
    "duration": "16h 16m",
    "stops": 0,
    "departureTime": "2026-06-10T10:00:00"
  },
  {
    "id": "61",
    "from": "Doha (DOH)",
    "to": "Miami (MIA)",
    "airline": "Qatar Airways",
    "price": 1306,
    "duration": "16h 45m",
    "stops": 1,
    "departureTime": "2026-06-10T19:00:00"
  },
  {
    "id": "62",
    "from": "Sydney (SYD)",
    "to": "Philadelphia (PHL)",
    "airline": "Qantas",
    "price": 1364,
    "duration": "17h 21m",
    "stops": 1,
    "departureTime": "2026-06-10T08:00:00"
  },
  {
    "id": "63",
    "from": "Sydney (SYD)",
    "to": "Atlanta (ATL)",
    "airline": "Qantas",
    "price": 907,
    "duration": "18h 12m",
    "stops": 0,
    "departureTime": "2026-06-20T15:00:00"
  },
  {
    "id": "64",
    "from": "Sydney (SYD)",
    "to": "New York (JFK)",
    "airline": "Qantas",
    "price": 1284,
    "duration": "18h 7m",
    "stops": 0,
    "departureTime": "2026-06-12T13:00:00"
  },
  {
    "id": "65",
    "from": "Sydney (SYD)",
    "to": "Los Angeles (LAX)",
    "airline": "United Airlines",
    "price": 1351,
    "duration": "18h 58m",
    "stops": 1,
    "departureTime": "2026-06-18T13:00:00"
  },
  {
    "id": "66",
    "from": "Doha (DOH)",
    "to": "Seattle (SEA)",
    "airline": "Qatar Airways",
    "price": 1228,
    "duration": "14h 37m",
    "stops": 0,
    "departureTime": "2026-06-12T21:00:00"
  },
  {
    "id": "67",
    "from": "Doha (DOH)",
    "to": "Philadelphia (PHL)",
    "airline": "Qatar Airways",
    "price": 886,
    "duration": "14h 33m",
    "stops": 0,
    "departureTime": "2026-06-11T12:00:00"
  },
  {
    "id": "68",
    "from": "Riyadh (RUH)",
    "to": "Seattle (SEA)",
    "airline": "Saudia",
    "price": 846,
    "duration": "15h 37m",
    "stops": 1,
    "departureTime": "2026-06-07T06:00:00"
  },
  {
    "id": "69",
    "from": "Riyadh (RUH)",
    "to": "Houston (IAH)",
    "airline": "Saudia",
    "price": 1259,
    "duration": "18h 44m",
    "stops": 1,
    "departureTime": "2026-06-15T10:00:00"
  },
  {
    "id": "70",
    "from": "Dubai (DXB)",
    "to": "Kansas City (MCI)",
    "airline": "Emirates",
    "price": 1181,
    "duration": "17h 52m",
    "stops": 0,
    "departureTime": "2026-06-11T16:00:00"
  },
  {
    "id": "71",
    "from": "Dubai (DXB)",
    "to": "Houston (IAH)",
    "airline": "Emirates",
    "price": 999,
    "duration": "15h 21m",
    "stops": 0,
    "departureTime": "2026-06-26T13:00:00"
  },
  {
    "id": "72",
    "from": "Dubai (DXB)",
    "to": "San Francisco (SFO)",
    "airline": "United Airlines",
    "price": 1056,
    "duration": "13h 4m",
    "stops": 0,
    "departureTime": "2026-06-27T11:00:00"
  },
  {
    "id": "73",
    "from": "Dubai (DXB)",
    "to": "Los Angeles (LAX)",
    "airline": "Emirates",
    "price": 1117,
    "duration": "18h 56m",
    "stops": 0,
    "departureTime": "2026-06-09T13:00:00"
  }
];

export const DEALS: Deal[] = [
  {
    id: '1',
    to: 'Miami',
    price: 320,
    image: 'https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?auto=format&fit=crop&w=800&q=80',
    discount: '25% OFF',
    partner: 'skyscannerId'
  },
  {
    id: '2',
    to: 'Los Angeles',
    price: 450,
    image: 'https://images.unsplash.com/photo-1444723121867-7a241cacace9?auto=format&fit=crop&w=800&q=80',
    discount: 'Flash Deal',
    partner: 'expediaId'
  },
  {
    id: '3',
    to: 'New York',
    price: 380,
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=800&q=80',
    discount: 'Early Bird',
    partner: 'kayakId'
  }
];

export const HOST_CITIES = [
  'Atlanta', 'Boston', 'Dallas', 'Houston', 'Kansas City', 'Los Angeles',
  'Miami', 'New York', 'Philadelphia', 'San Francisco', 'Seattle'
];
