import cyber from './cyber.jpg';
import React, { useState } from 'react';

export default  function Subscribe(){
    const [showSignupModal, setShowSignupModal] = useState(false);
    const [signupFormData, setSignupFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        rePassword: ''
    });

    const openSignupModal = () => {
        setShowSignupModal(true);
    };

    const closeSignupModal = () => {
        setShowSignupModal(false);
    };

    const handleSignupInputChange = (e) => {
        const { name, value } = e.target;
        setSignupFormData({ ...signupFormData, [name]: value });
    };

    const handleSignupSubmit = async (e) => {
        e.preventDefault();
        try {
            // Make POST API request here
            const response = await fetch('your-api-endpoint', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(signupFormData)
            });
            if (response.ok) {
                // Handle successful signup
                console.log('Signup successful');
            } else {
                // Handle failed signup
                console.error('Signup failed');
            }
        } catch (error) {
            console.error('Error occurred:', error);
        }
    };

    return(
        <>
            <div className='relative mt-10'>
                <img src={cyber} alt="" className='w-full h-32 lg:h-80' />
                <div className='absolute inset-0 flex flex-col lg:flex-row md:flex-row sm:flex-row justify-center items-center space-y-4'>
                    <h1 className='text-white font-bold text-[10px] sm:text-[3rem] me-2 lg:text-[4rem] text-center'>Subscribe to our newsletter</h1>
                    <div className='h-[2px] bg-white w-48 hidden sm:block md:block lg:block'></div>
                    <button onClick={openSignupModal} className='bg-teal-800 hover:bg-teal-600 text-white rounded-lg lg:px-8 lg:py-4 md:px-8 md:py-4 px-4 py-1 ms-2 text-[10px] lg:text-lg md:text-lg'>Sign Up</button>
                </div>
            </div>
            {showSignupModal && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-white relative rounded-lg p-6 max-w-md w-full">
                        <button onClick={closeSignupModal} className="text-gray-500 hover:text-gray-700 absolute top-4 right-4">
                            &times;
                        </button>
                        <div className="flex flex-col items-center">
                            <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
                            <form className="w-full" onSubmit={handleSignupSubmit}>
                                <div className="mb-4">
                                    <label htmlFor="firstName" className="block text-gray-700 text-sm font-bold mb-2">First Name</label>
                                    <input type="text" id="firstName" name="firstName" value={signupFormData.firstName} onChange={handleSignupInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="lastName" className="block text-gray-700 text-sm font-bold mb-2">Last Name</label>
                                    <input type="text" id="lastName" name="lastName" value={signupFormData.lastName} onChange={handleSignupInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                                    <input type="email" id="email" name="email" value={signupFormData.email} onChange={handleSignupInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                                    <input type="password" id="password" name="password" value={signupFormData.password} onChange={handleSignupInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="rePassword" className="block text-gray-700 text-sm font-bold mb-2">Re-enter Password</label>
                                    <input type="password" id="rePassword" name="rePassword" value={signupFormData.rePassword} onChange={handleSignupInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                </div>
                                <div className="flex items-center justify-between">
                                    <button type="submit" className="bg-teal-800 hover:bg-teal-600 text-white px-4 py-2 rounded hover:bg-opacity-90">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
        
    )
}