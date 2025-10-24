import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import { errorAlert, successAlert } from '../alerts/Alerts';

const Login = () => {
    const { signInUser, user: currentUser, loading } = useContext(AuthContext);
    const navigate = useNavigate();

    // Redirect if user is already logged in
    useEffect(() => {
        if (!loading && currentUser) {
            navigate('/');
        }
    }, [currentUser, loading, navigate]);

    // Show loading or nothing while checking auth state
    if (loading) {
        return (
            <div className="bg-base-200 flex justify-center items-center min-h-screen">
                <div className="loading loading-spinner loading-lg"></div>
            </div>
        );
    }

    // Don't render login form if user is logged in
    if (currentUser) {
        return null;
    }

    const handleLogin = (event) => {
        event.preventDefault();

        const userEmail = event.target.email.value;
        const userPassword = event.target.password.value;

        signInUser(userEmail, userPassword)
            .then((result) => {
                const user = result.user;
                event.target.reset();
                successAlert(`Welcome back, ${user.displayName || 'User'}!`);
                // Navigate to home page after successful login
                navigate('/');
            })
            .catch((error) => {
                const errorCode = error.code;
                let errorMessage = 'Login failed';
                
                // Provide user-friendly error messages
                switch (errorCode) {
                    case 'auth/user-not-found':
                        errorMessage = 'No account found with this email';
                        break;
                    case 'auth/wrong-password':
                        errorMessage = 'Incorrect password';
                        break;
                    case 'auth/invalid-credential':
                        errorMessage = 'Invalid email or password';
                        break;
                    case 'auth/invalid-email':
                        errorMessage = 'Invalid email address';
                        break;
                    case 'auth/user-disabled':
                        errorMessage = 'This account has been disabled';
                        break;
                    case 'auth/too-many-requests':
                        errorMessage = 'Too many failed attempts. Please try again later';
                        break;
                    default:
                        errorMessage = `Error: ${errorCode}`;
                }
                errorAlert(errorMessage);
            })
    }

    return (
        <div className="bg-base-200 flex justify-center items-start pt-16">
            <div className="card bg-white w-11/12 max-w-md shadow-2xl p-8 rounded-md">
                {/* Title */}
                <h2 className="text-2xl font-bold text-black text-center">Login your account</h2>

                {/* 32px gap */}
                <div className="h-8"></div>

                {/* Thin gray underline */}
                <hr className="border-t border-gray-200" />

                {/* 32px gap */}
                <div className="h-8"></div>

                <form onSubmit={handleLogin} className="space-y-4">
                    {/* Email */}
                    <div>
                        <label className="block font-semibold text-black mb-1">Email Address</label>
                        <input
                            required
                            name='email'
                            type="email"
                            placeholder="Enter your email address"
                            className="w-full p-3 border border-gray-300 rounded-md text-black placeholder-[#9F9F9F] focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block font-semibold text-black mb-1">Password</label>
                        <input
                            required
                            name='password'
                            type="password"
                            placeholder="Enter your password"
                            className="w-full p-3 border border-gray-300 rounded-md text-black placeholder-[#9F9F9F] focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                    </div>

                    {/* Login button */}
                    <button type="submit" className="w-full font-semibold bg-[#403F3F] text-white py-3 rounded-md mt-2 hover:bg-[#2e2d2d]">
                        Login
                    </button>
                </form>

                {/* Footer */}
                <p className="text-center text-[12px] font-bold text-gray-500 mt-4">
                    Don't have an account ?{' '}
                    <Link to="/auth/register" className="text-red-500 font-semibold hover:underline">
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;