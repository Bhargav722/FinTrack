import React, { useState } from 'react'
import AuthLayout from '../../components/layouts/AuthLayout'
import { Link, useNavigate } from 'react-router-dom'
import Input from '../../components/Inputs/Input'
import { validateEmail } from "../../utils/helper"
import axiosInstance from '../../utils/axiosInstance'
import { API_PATHS } from '../../utils/apiPaths'
import { useContext } from 'react'
import { UserContext } from '../../context/userContext'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)

  const { updateUser } = useContext(UserContext)
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()

    // Email validation
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.")
      return
    }

    // Password validation
    if (!password) {
      setError("Please enter the password")
      return
    }


    setError("")

    //Login API Call
    try {
      console.log("Attempting login with:", email);
      const response = await axiosInstance.post(API_PATHS.AUTH.LOGIN, {
        email,
        password,
      })
      console.log("Login response:", response.data);
      const { token, user } = response.data
      if (token) {
        console.log("Token received, saving to localStorage");
        localStorage.setItem("token", token)
        console.log("Updating user context:", user);
        updateUser(user)
        console.log("Navigating to dashboard");
        navigate("/dashboard")
      } else {
        console.error("No token in response");
        setError("Login failed - no token received")
      }

    } catch (error) {
      console.error("Login error:", error);
      console.error("Error response:", error.response?.data);
      if (error.response && error.response.data.message) {
        setError(error.response.data.message)
      } else {
        setError("Something went wrong. Please try again.")
      }

    }

  }

  return (
    <AuthLayout>
      <div>
        <div className='lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center'>
          <h3 className='text-xl font-semibold text-black'>Welcome Back</h3>
          <p className='text-xs text-slate-700 mt-[5px] mb-6'>
            Please enter your details to log in
          </p>

          <form onSubmit={handleLogin}>
            <Input
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              label="Email Address"
              placeholder="john@example.com"
              type="text"
            />

            <Input
              value={password}
              onChange={({ target }) => setPassword(target.value)}
              label="Password"
              placeholder="Min 8 characters"
              type="password"
            />

            {error && (
              <p className='text-red-500 text-xs pb-2.5'>{error}</p>
            )}

            <button type='submit' className="w-full bg-primary text-white py-2.5 rounded-lg text-sm font-medium hover:bg-primary/90 active:scale-[0.98] transition-all duration-200 shadow-md shadow-primary/20"> LOGIN </button>

            <p className='text-[13px] text-slate-800 mt-3'>
              Don&apos;t have an account?{" "}
              <Link to="/signup" className='font-medium text-primary underline'>
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </AuthLayout>
  )
}

export default Login
