import React, { useContext, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import { errorAlert, successAlert } from '../alerts/Alerts';
import { getAuth } from 'firebase/auth';
import app from '../firebase/firebase.config';

const auth = getAuth(app);


const Register = () => {

    const { createUser, updateUserProfile, user: currentUser, loading } = useContext(AuthContext);
    const [acceptedTerms, setAcceptedTerms] = useState(false);
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

    // Don't render register form if user is logged in
    if (currentUser) {
        return null;
    }

    const handleRegister = (event) => {
        event.preventDefault();

        const userName = event.target.name.value;
        const userPhotoUrl = event.target.photoUrl.value;
        const userEmail = event.target.email.value;
        const userPassword = event.target.password.value;

        // Validate terms acceptance
        if (!acceptedTerms) {
            errorAlert('Please accept the Terms and Conditions');
            return;
        }

        // Validate password length
        if (userPassword.length < 6) {
            errorAlert('Password must be at least 6 characters long');
            return;
        }

        createUser(userEmail, userPassword)
            .then((result) => {
                const user = result.user;
                // Update user profile with name and photo
                updateUserProfile(user, userName, userPhotoUrl)
                    .then(() => {
                        event.target.reset();
                        setAcceptedTerms(false);
                        // Get the updated user object with displayName
                        const updatedUser = auth.currentUser;
                        const displayName = updatedUser?.displayName || userName;
                        successAlert(`User '${displayName}' created successfully!`)
                        // Navigate to home page after successful registration
                        navigate('/');
                    })
                    .catch((error) => {
                        errorAlert(`Profile update failed: ${error.message}`);
                    });
            })
            .catch((error) => {
                const errorCode = error.code;
                let errorMessage = 'Registration failed';
                
                // Provide user-friendly error messages
                switch (errorCode) {
                    case 'auth/email-already-in-use':
                        errorMessage = 'This email is already registered';
                        break;
                    case 'auth/invalid-email':
                        errorMessage = 'Invalid email address';
                        break;
                    case 'auth/weak-password':
                        errorMessage = 'Password is too weak';
                        break;
                    default:
                        errorMessage = `Error: ${errorCode}`;
                }
                errorAlert(errorMessage);
            })
    }

    return (
        <div className="bg-base-200 flex justify-center items-start pt-16 pb-16">
            <div className="card bg-white w-11/12 max-w-2xl shadow-2xl p-8 rounded-md">
                {/* Title */}
                <h2 className="text-2xl font-bold text-black text-center">Register your account</h2>

                {/* 32px gap */}
                <div className="h-8"></div>

                {/* Thin gray underline */}
                <hr className="border-t border-gray-200" />

                {/* 32px gap */}
                <div className="h-8"></div>

                {/* Form */}
                <form onSubmit={handleRegister} className="space-y-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="col-span-1">
                        <label className="block font-semibold text-black mb-1">Name</label>
                        <input
                            required
                            name='name'
                            type="text"
                            placeholder="Enter your full name"
                            className="w-full p-3 border border-gray-300 rounded-md text-black placeholder-[#9F9F9F] focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                    </div>

                    {/* Photo URL */}
                    <div className="col-span-1">
                        <label className="block font-semibold text-black mb-1">Photo URL</label>
                        <input
                            required
                            name='photoUrl'
                            type="text"
                            placeholder="Enter your photo URL"
                            className="w-full p-3 border border-gray-300 rounded-md text-black placeholder-[#9F9F9F] focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                    </div>

                    {/* Email */}
                    <div className="col-span-1">
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
                    <div className="col-span-1">
                        <label className="block font-semibold text-black mb-1">Password</label>
                        <input
                            required
                            name='password'
                            type="password"
                            placeholder="Enter your password"
                            minLength="6"
                            className="w-full p-3 border border-gray-300 rounded-md text-black placeholder-[#9F9F9F] focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                    </div>

                    {/* Terms & Conditions */}
                    <div className="col-span-1 md:col-span-2 flex items-center gap-2">
                        <input 
                            type="checkbox" 
                            id="terms" 
                            className="w-4 h-4" 
                            checked={acceptedTerms}
                            onChange={(e) => setAcceptedTerms(e.target.checked)}
                        />
                        <label htmlFor="terms" className="text-black font-bold">
                            Accept Terms and Conditions
                        </label>
                    </div>

                    {/* Register button */}
                    <div className="col-span-1 md:col-span-2">
                        <button
                            type="submit"
                            className="w-full font-semibold bg-[#403F3F] text-white py-3 rounded-md mt-2 hover:bg-[#2e2d2d] hover:cursor-pointer"
                        >
                            Register
                        </button>
                    </div>

                </form>

                {/* Footer */}
                <p className="text-center text-[12px] font-bold text-gray-500 mt-4">
                    Already have an account?{' '}
                    <Link to="/auth/login" className="text-red-500 font-semibold hover:underline">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
