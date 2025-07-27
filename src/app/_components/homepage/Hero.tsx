import React from 'react'

const Hero = () => {
  return (
    <section className="relative h-[60vh] w-full">
    {/* Background Image */}
    <img
      src="https://images.unsplash.com/photo-1707343848552-893e05dba6ac?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Travel Background"
      className="absolute inset-0 w-full h-full object-cover"
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-black/50" />

    {/* Content */}
    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
      <h1 className="text-white text-4xl sm:text-6xl font-bold mb-4 drop-shadow-lg">
        Explore The World With Us 
      </h1>
      <p className="text-white text-lg sm:text-2xl font-medium drop-shadow">
        Find Your Next Travel Destination
      </p>
    </div>
  </section>
  )
}

export default Hero
