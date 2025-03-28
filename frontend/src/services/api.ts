
import { toast } from 'sonner';

const API_URL = 'http://localhost:5000/api';

interface ApiOptions {
  method?: string;
  body?: any;
  token?: string;
}

export const apiRequest = async (endpoint: string, options: ApiOptions = {}) => {
  const { method = 'GET', body, token } = options;

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  } else {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      headers['Authorization'] = `Bearer ${storedToken}`;
    }
  }

  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined,
    });

    const data = await response.json();

    if (!response.ok) {
      // If the error is due to authentication, clear the token
      if (response.status === 401) {
        localStorage.removeItem('token');
        // You may want to redirect to login here
      }
      
      throw new Error(data.message || 'Something went wrong');
    }

    return data;
  } catch (error) {
    console.error(`API error for ${endpoint}:`, error);
    const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
    toast.error(errorMessage);
    throw error;
  }
};

// Auth services
export const authService = {
  login: (email: string, password: string) => 
    apiRequest('/auth/login', { method: 'POST', body: { email, password } }),
  
  signup: (name: string, email: string, password: string) => 
    apiRequest('/auth/signup', { method: 'POST', body: { name, email, password } }),
  
  me: () => apiRequest('/auth/me'),
};

// User services
export const userService = {
  getProfile: () => apiRequest('/users/profile'),
  updateProfile: (userData: any) => 
    apiRequest('/users/profile', { method: 'PUT', body: userData }),
};

// Transaction services
export const transactionService = {
  getAll: () => apiRequest('/transactions'),
  getById: (id: string) => apiRequest(`/transactions/${id}`),
};

// Account services
export const accountService = {
  getAll: () => apiRequest('/accounts'),
  getById: (id: string) => apiRequest(`/accounts/${id}`),
};

// Add more service methods as needed
