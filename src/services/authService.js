import axios from 'axios';

const baseURL = import.meta.env.VITE_BASE_URL || 'http://localhost:5000';


export const register = async (userData) => {
  try {
    const response = await axios.post(`${baseURL}/api/auth/register`, userData);
    console.log('Registration successful:', response.data);
    // Optionally, you can store the token in localStorage or handle it as needed
    return response.data;
  } catch (error) {
    console.error('Error during registration:', error);
    throw error.response ? error.response.data : error.message;
  }
}




