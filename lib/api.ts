import { ApiResponse, ContactInfo, MainContent } from '@/types/api';

const API_BASE_URL = '/api/v1';

async function fetchApi<T>(endpoint: string): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        'Accept': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return { data };
  } catch (error) {
    console.error('API Error:', error);
    return { 
      data: null, 
      error: error instanceof Error ? error.message : 'Unknown error occurred' 
    };
  }
}

export const api = {
  getMainContent: () => fetchApi<MainContent>('/fund/info'),
  getContactInfo: () => fetchApi<ContactInfo>('/fund/info'),
}; 