"use client"

export default function Waitlist() {
    return (
        <div className='flex flex-col items-center justify-center h-screen z-20'>
            <h1 className='text-4xl font-bold'>Waitlist</h1>
            <p className='text-lg mt-4'>Sign up for our waitlist to get early access!</p>
            <form className='mt-4'>
                <input
                    type='email'
                    placeholder='Enter your email'
                    className='px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500'
                    required
                />
                <button
                    type='submit'
                    className='ml-2 px-4 py-2 text-white bg-orange-500 rounded-md hover:bg-orange-800'
                >
                    Sign Up
                </button>
            </form>
        </div>
    )
}