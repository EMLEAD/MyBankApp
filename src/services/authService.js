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

export const login = async (email, password) => {
  try {
    const response = await axios.get(`${baseURL}/api/auth/login`, { email, password });
    console.log('Login successful:', response.data);
    // Optionally, you can store the token in localStorage or handle it as needed
    return response.data;
  } catch (error) {
    console.error('Login cannot be completed:', error);
    throw error.response ? error.response.data : error.message;
  }
};


// Function to send form data to backend
  export const sendMoney = async (data) => {
    try {
      const response = await axios.post(`${baseURL}/api/transfer`, data);
      return response.data;
    } catch (err) {
      throw err.response?.data?.message || 'Transfer failed. Please try again.';
    }
  };



// export const forgotPassword = async (email) => {
//   try {
//     const response = await axios.post(`${baseURL}/api/auth/forgotPassword`, { email });
//     console.log('Forgot password request successful:', response.data);
//     return response.data;
//   } catch (error) {
//     console.error('Error in forgot password:', error);
//     throw error.response ? error.response.data : error.message;
//   }
// };  

export const getUser = async (token) => {
  try {
    const response = await axios.get(`${baseURL}/api/auth/getUser`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log('User fetched successfully:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error.response ? error.response.data : error.message;
  }
};
