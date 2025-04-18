export interface SocialLink {
  id: number;
  url: string;
  icon: string;
  title: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
}

export interface MainPageContent {
  title: string;
  description: string;
}

export interface ApiData {
  title: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  social: {
    [key: string]: string;
  };
}

export interface ApiResponse<T> {
  data: T | null;
  error?: string;
} 