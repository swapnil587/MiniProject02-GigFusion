import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import bgImage from '../components/Assets/backgroundImage.png'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import LoginPhoto from "../components/Assets/LoginPage01Photo.jpg"


export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');

        await axios.post('http://localhost:8000/api/v1/users/login',
            { email, password, },
            { headers: { 'Content-Type': 'application/json', } })
            .then((response) => {
                const JsonData = response.data;

                if (response.status === 200) {
                    toast.success('Login successful');
                    toast.info('Redirecting to dashboard');
                    document.cookie = `accessToken=${JsonData.data.accessToken}; path=/;`;
                    localStorage.setItem('user', JSON.stringify(JsonData.data.user));
                    setTimeout(() => {
                        if (JsonData.data.userType === 'user') {
                            navigate('/projects');
                        } else if (JsonData.data.userType === 'serviceProvider') {
                            navigate('/projects');
                        } else if (JsonData.data.userType === 'admin') {
                            navigate('/dashboard-admin');
                        } else {
                            setError('Login failed');
                        }
                    }, 1000);
                } else {
                    toast.error(toast.error(JsonData.message) || 'Login failed');
                    setError(JsonData.message || 'Login failed');
                }
            })
            .catch((error) => {
                if (error.response.status === 400) {
                    toast.error('Username or Email is required');
                    setError('Username or Email is required');
                } else if (error.response.status === 401) {
                    toast.error('Password is required');
                    setError('Password is required');
                } else if (error.response.status === 402) {
                    toast.error('Invalid Password');
                    setError('Invalid Password');
                } else if (error.response.status === 404) {
                    toast.error('User does not exist');
                    setError('User does not exist');
                } else {
                    toast.error('Login Failed. Please try again!!');
                    setError('Login Failed. Please try again.');
                }
            });
    };

    return (
        <>         
       <div className="min-h-screen flex items-center justify-center p-6 font-stdFont">
  <div className="w-full max-w-md rounded-3xl bg-white border p-6 sm:p-8 shadow-xl">
    
    {/* Header */}
    <div className="text-center">
      <h1 className="text-2xl sm:text-3xl font-semibold text-color1">
        Sign In
      </h1>
      <p className="text-sm mt-2 text-stdBlue font-semibold">
        Welcome to our community of skilled professionals!
      </p>
    </div>

    {/* Form */}
    <form onSubmit={handleLogin} className="mt-8">
        <div className='space-y-4'>
               {/* Email */}
      <input
        type="email"
        placeholder="Email"
        className="w-full rounded-xl border px-4 py-2.5 text-base outline-none focus:ring-2 focus:ring-stdBlue/40"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      {/* Password */}
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          className="w-full rounded-xl border px-4 py-2.5 pr-12 text-base outline-none focus:ring-2 focus:ring-stdBlue/40"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-color1 transition"
        >
          {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
        </button>
      </div>

        </div>

   

      {/* Forgot */}
      <div className="flex mt-1 ">
        <Link to="/Forgot" className="text-sm text-stdBlue">
          Forgot Password?
        </Link>
      </div>

      {/* Error */}
      {error && (
        <p className="text-red-500 text-center text-xs ">{error}</p>
      )}

      {/* Login Button */}
      <div className="flex justify-center mt-2 pt-2">
        <button
          type="submit"
          className="py-2 w-1/2 rounded-full bg-stdBlue font-semibold text-white hover:bg-color1 shadow-md hover:shadow-lg transition active:scale-95"
        >
          Login
        </button>
      </div>

      {/* Signup */}
      <p className="text-center text-xs mt-1">
        Don&apos;t have an account?{" "}
        <Link to="/signup" className="text-sm font-semibold text-stdBlue">
          Sign Up
        </Link>
      </p>

      {/* Divider */}
      <div className="flex items-center gap-3 my-6">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="px-2 text-sm text-gray-400 whitespace-nowrap">
          OR continue with
        </span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>

      {/* Google Login */}
      <div className="flex justify-center">
        <button
          className="w-full rounded-xl  px-4 py-2.5 flex items-center justify-center gap-2  border border-stdBlue bg-white font-semibold shadow-sm hover:shadow-md transition active:scale-95"
        >
          <i className="fa-brands fa-google text-lg text-GoogleIcon"></i>
          <span className="text-gray-700 text-sm sm:text-base">
            Login with Google
          </span>
        </button>
      </div>

    </form>
  </div>
</div>

       
        </>
    );
}