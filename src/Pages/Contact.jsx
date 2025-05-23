import React from 'react'
import Hero from '../Components/Hero'
import takeout from '../assets/photos/takeout.jpg'
import ContactInfo from '../Components/ContactInfo'

import Form from '../Components/Form'


const Contact = () => {
  return (
    <>
      <Hero
        backgroundImage={takeout}
        title="Cafe Himalayan"
        heading="We’d Love to Hear From You"
        subheading="Questions, reservations, or special requests? Get in touch and we’ll make your experience unforgettable."
        btnLink={"/order"}
        btnContent="  Contact Us"
        btnCustom={
          "border-white text-white bg-transparent z-10 hover:bg-[#f76e2a] hover:border-black hover:text-black px-4 py-2 rounded transition duration-200 ease-in-out text-sm sm:text-base md:text-lg"
        }
        btnOnclick={() => console.log("Order now clicked")}
      />
      <div className='bg-white w-full'>
      <ContactInfo/>
      </div>
      <div className='py-10 px-4 sm:px-6 md:px-10 lg:px-20 max-w-3xl mx-auto w-full'>
      <Form/>
      </div>
    </>
  )
}

export default Contact
