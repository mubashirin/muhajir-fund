export interface SocialLink {
  platform: string;
  url: string;
  id: number;
  fund_id: number;
  created_at: string;
  updated_at: string | null;
}

export interface MainPageContent {
  title: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  social: SocialLink[];
}

export interface ApiResponse<T> {
  data: T | null;
  error?: string;
}

export interface FundInfo {
  name: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  id: number;
  is_active: boolean;
  created_at: string;
  updated_at: string | null;
  social_links: SocialLink[];
  bank_details: any[];
}

export type MainContent = Pick<FundInfo, 'name' | 'description'>;
export type ContactInfo = Pick<FundInfo, 'address' | 'phone' | 'email' | 'social_links'>; 