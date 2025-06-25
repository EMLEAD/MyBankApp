import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { register } from '../store/authSlice';
import { BsGenderAmbiguous } from 'react-icons/bs';
import toast, { Toaster } from 'react-hot-toast';
import Loader from '../utils/Loader';

const SignUp = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSubmitting, setSubmitting] =useState(false);


  const [formData, setFormData] = useState({
    firstName :"",
      lastName: "",
      middleName:"",
      gender:"",
      email:"",
      phoneNumber:"",
      password:"",
      confirmPassword: "",

  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };  

const handleSubmit = async (e) => {
  e.preventDefault();
  setSubmitting(true);

  // Validate required fields
  const requiredFields = [
    { key: "firstName", label: "First Name" },
    { key: "email", label: "Email" },
    { key: "password", label: "Password" },
    { key: "confirmPassword", label: "Confirm Password" }
  ];

  for (let field of requiredFields) {
    if (!formData[field.key] || formData[field.key].trim() === "") {
      toast.error(`${field.label} is required.`);
      setSubmitting(false);
      return;
    }
  }

  if (formData.password.length < 6) {
    toast.error("Password must be at least 6 characters long.");
    setSubmitting(false);
    return;
  }

  if (formData.password !== formData.confirmPassword) {
    toast.error("Passwords do not match.");
    setSubmitting(false);
    return;
  }

  try {
    const response = await dispatch(register(formData));
    if (response.payload && response.payload.success) {
      navigate('/');
    } else {
      toast.error(response.payload?.message || "Registration failed.");
    }
  } catch (error) {
    console.error("Registration error:", error);
    toast.error("Registration failed. Please try again.");
  } finally {
    setSubmitting(false);
  }
};
    
  return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Create your account
            </h2>
          </div>
    
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <form className="space-y-6" onSubmit={handleSubmit} >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    firstName
                  </label>
                  <div className="mt-1">
                    <input
                      id="name"
                      name="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500"
                     
                    />
                  </div>
                </div>
    
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Registered Email address
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500"
                     
                    />
                  </div>
                </div>
    
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      value={formData.password}
                      onChange={handleChange}
                    
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500"
                      
                    />
                  </div>
                </div>
    
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                    Confirm Password
                  </label>
                  <div className="mt-1">
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      onChange={handleChange}
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500"
                     
                    />
                  </div>
                </div>
    
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    Sign up
                  </button>
                </div>
              </form>
    
              <div className="mt-6">
                <div className="relative">
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">
                      Already have an account? <a href="/Login" className="font-medium text-red-600 hover:text-red-500">Sign in</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {
            isSubmitting && (
              <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
                <Loader />
              </div>
            )
          }
        </div>
      );
    };
    
  

export default SignUp