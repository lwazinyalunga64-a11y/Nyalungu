import type { Subscriber } from '../types';

const SUBSCRIBERS_KEY = 'goalgetaway_subscribers';

export const getSubscribers = (): Subscriber[] => {
  const stored = localStorage.getItem(SUBSCRIBERS_KEY);
  if (!stored) return [];
  try {
    return JSON.parse(stored);
  } catch (e) {
    console.error('Failed to parse subscribers', e);
    return [];
  }
};

export const addSubscriber = (email: string): boolean => {
  const subscribers = getSubscribers();
  
  // Check if already exists
  if (subscribers.some(s => s.email.toLowerCase() === email.toLowerCase())) {
    return true; // Treat as success if already subscribed
  }

  const newSubscriber: Subscriber = {
    id: Math.random().toString(36).substring(2, 9),
    email,
    subscribedAt: new Date().toISOString()
  };

  const updated = [...subscribers, newSubscriber];
  localStorage.setItem(SUBSCRIBERS_KEY, JSON.stringify(updated));
  return true;
};

export const validateEmail = (email: string): boolean => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const downloadSubscribersCsv = () => {
  const subscribers = getSubscribers();
  if (subscribers.length === 0) return;

  const headers = ['ID', 'Email', 'Subscribed At'];
  const rows = subscribers.map(s => [s.id, s.email, s.subscribedAt]);
  
  const csvContent = [
    headers.map(h => `"${h}"`).join(','),
    ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
  ].join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `subscribers_${new Date().toISOString().split('T')[0]}.csv`);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
