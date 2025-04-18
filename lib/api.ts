import { ContactInfo, MainPageContent, SocialLink, ApiResponse, ApiData } from '../types/api';

const SOCIAL_ICONS = {
  facebook: 'facebook',
  instagram: 'instagram',
  telegram: 'telegram',
  vk: 'vk',
  youtube: 'youtube'
} as const;

class ApiClient {
  private baseUrl: string;

  constructor() {
    this.baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
  }

  private async fetch<T>(endpoint: string): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: ApiData = await response.json();
      return { data: this.transformData<T>(data) };
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown error occurred';
      return { data: null as T, error: message };
    }
  }

  private transformData<T>(data: ApiData): T {
    if (this.isMainContent<T>()) {
      return {
        title: data.title,
        description: data.description
      } as T;
    }

    if (this.isContactInfo<T>()) {
      return {
        address: data.address,
        phone: data.phone,
        email: data.email
      } as T;
    }

    if (this.isSocialLinks<T>()) {
      return Object.entries(data.social)
        .filter(([platform]) => platform in SOCIAL_ICONS)
        .map(([platform, url], id) => ({
          id: id + 1,
          url,
          icon: platform,
          title: this.formatSocialTitle(platform)
        })) as T;
    }

    return {} as T;
  }

  private formatSocialTitle(platform: string): string {
    const titles = {
      facebook: 'Facebook',
      instagram: 'Instagram',
      telegram: 'Telegram',
      vk: 'ВКонтакте',
      youtube: 'YouTube'
    };
    return titles[platform as keyof typeof titles] || platform;
  }

  private isMainContent<T>(): boolean {
    return true; // Упрощенная проверка типа
  }

  private isContactInfo<T>(): boolean {
    return true; // Упрощенная проверка типа
  }

  private isSocialLinks<T>(): boolean {
    return true; // Упрощенная проверка типа
  }

  async getMainContent(): Promise<ApiResponse<MainPageContent>> {
    return this.fetch<MainPageContent>('/data/');
  }

  async getContactInfo(): Promise<ApiResponse<ContactInfo>> {
    return this.fetch<ContactInfo>('/data/');
  }

  async getSocialLinks(): Promise<ApiResponse<SocialLink[]>> {
    return this.fetch<SocialLink[]>('/data/');
  }
}

export const api = new ApiClient(); 