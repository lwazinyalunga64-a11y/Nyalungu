
export interface AffiliateConfig {
  skyscannerId: string;
  expediaId: string;
  kayakId: string;
}

export interface Stats {
  skyscannerClicks: number;
  expediaClicks: number;
  kayakClicks: number;
  totalEarnings: number;
}

const DEFAULT_CONFIG: AffiliateConfig = {
  skyscannerId: 'goalgetaway-sky',
  expediaId: 'goalgetaway-exp',
  kayakId: 'goalgetaway-kayak',
};

const STATS_KEY = 'gg_affiliate_stats';
const CONFIG_KEY = 'gg_affiliate_config';

export const getAffiliateConfig = (): AffiliateConfig => {
  const saved = localStorage.getItem(CONFIG_KEY);
  return saved ? JSON.parse(saved) : DEFAULT_CONFIG;
};

export const saveAffiliateConfig = (config: AffiliateConfig) => {
  localStorage.setItem(CONFIG_KEY, JSON.stringify(config));
};

export const getStats = (): Stats => {
  const saved = localStorage.getItem(STATS_KEY);
  return saved ? JSON.parse(saved) : { skyscannerClicks: 0, expediaClicks: 0, kayakClicks: 0, totalEarnings: 0 };
};

export const trackClick = (partner: keyof AffiliateConfig) => {
  const stats = getStats();
  const partnerKey = partner.replace('Id', 'Clicks') as keyof Omit<Stats, 'totalEarnings'>;
  stats[partnerKey]++;
  
  // Simulated earnings: $1.50 per click for Skyscanner, $1.20 for Expedia, $1.10 for Kayak
  const rates = {
    skyscannerClicks: 1.5,
    expediaClicks: 1.2,
    kayakClicks: 1.1,
  };
  
  stats.totalEarnings = (stats.skyscannerClicks * rates.skyscannerClicks) + 
                        (stats.expediaClicks * rates.expediaClicks) + 
                        (stats.kayakClicks * rates.kayakClicks);
  
  localStorage.setItem(STATS_KEY, JSON.stringify(stats));
};

export const buildPartnerUrl = (baseUrl: string, partner: keyof AffiliateConfig): string => {
  const config = getAffiliateConfig();
  const affiliateId = config[partner];
  
  const url = new URL(baseUrl);
  url.searchParams.append('aid', affiliateId);
  url.searchParams.append('utm_source', 'goalgetaway');
  
  return url.toString();
};
