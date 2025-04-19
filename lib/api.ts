import { ContactInfo, MainContent } from '../types/api';

interface ApiResponse<T> {
  data: T | null;
  error?: string;
}

class ApiClient {
  private baseUrl: string;

  constructor() {
    this.baseUrl = 'http://127.0.0.1:8000';
  }

  private async fetch<T>(endpoint: string): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        mode: 'cors',
        credentials: 'include'
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return { data };
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown error occurred';
      console.error('API Error:', message);
      return { data: null as T, error: message };
    }
  }

  async getContactInfo(): Promise<ApiResponse<ContactInfo>> {
    const response = await this.fetch<any>('/data/');
    if (response.data) {
      return {
        data: {
          address: response.data.address || '',
          phone: response.data.phone || '',
          email: response.data.email || ''
        }
      };
    }
    return { data: null, error: 'Failed to load contact info' };
  }

  async getMainContent(): Promise<ApiResponse<MainContent>> {
    const response = await this.fetch<any>('/data/');
    if (response.data) {
      return {
        data: {
          description: response.data.description || ''
        }
      };
    }
    return { data: null, error: 'Failed to load main content' };
  }
}

export const api = new ApiClient(); 