export interface Flight {
  id: string;
  from: string;
  to: string;
  airline: string;
  price: number;
  duration: string;
  stops: number;
  departureTime: string;
}

export interface Deal {
  id: string;
  to: string;
  price: number;
  image: string;
  discount: string;
  partner?: 'skyscannerId' | 'expediaId' | 'kayakId';
}

export interface Subscriber {
  id: string;
  email: string;
  subscribedAt: string;
}
