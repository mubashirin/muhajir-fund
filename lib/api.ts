import { ContactInfo, MainPageContent, SocialLink, ApiResponse } from '../types/api';

class ApiClient {
  private async fetch<T>(endpoint: string): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`/api/data.json`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return { data: data[endpoint] };
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown error occurred';
      return { data: null as T, error: message };
    }
  }

  async getMainContent(): Promise<ApiResponse<MainPageContent>> {
    return this.fetch<MainPageContent>('main');
  }

  async getContactInfo(): Promise<ApiResponse<ContactInfo>> {
    return this.fetch<ContactInfo>('contacts');
  }

  async getSocialLinks(): Promise<ApiResponse<SocialLink[]>> {
    return this.fetch<SocialLink[]>('social');
  }
}

export const api = new ApiClient(); 