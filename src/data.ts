import type { Flight, Deal } from './types';

export const FLIGHTS: Flight[] = [
  {
    id: '1',
    from: 'London (LHR)',
    to: 'New York (JFK)',
    airline: 'British Airways',
    price: 450,
    duration: '8h 15m',
    stops: 0,
    departureTime: '2026-06-12T10:00:00'
  },
  {
    id: '2',
    from: 'Paris (CDG)',
    to: 'Los Angeles (LAX)',
    airline: 'Air France',
    price: 620,
    duration: '11h 30m',
    stops: 0,
    departureTime: '2026-06-13T09:00:00'
  },
  {
    id: '3',
    from: 'Madrid (MAD)',
    to: 'Miami (MIA)',
    airline: 'Iberia',
    price: 380,
    duration: '9h 45m',
    stops: 1,
    departureTime: '2026-06-14T11:30:00'
  },
  {
    id: '4',
    from: 'Tokyo (NRT)',
    to: 'San Francisco (SFO)',
    airline: 'JAL',
    price: 850,
    duration: '9h 20m',
    stops: 0,
    departureTime: '2026-06-15T18:00:00'
  },
  {
    id: '5',
    from: 'Mexico City (MEX)',
    to: 'Dallas (DFW)',
    airline: 'Aeromexico',
    price: 210,
    duration: '2h 45m',
    stops: 0,
    departureTime: '2026-06-12T07:00:00'
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
