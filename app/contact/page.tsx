'use client'
import { IContactDetails, IContactUs } from '@/interface';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { contactDetails } from '@/utils/data';
import styles from './contact.module.css';
import { deviceWidth } from '@/utils/helper-functions';

const Contact = () => {

  const [contactUs, setContactUs] = useState<IContactUs>({
    fullName: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      setContactUs({
        fullName: "",
        email: "",
        message: ""
      })
    } catch (error) {
      console.log("Error : ", error);
    }
  };

  const setAnimationWRTMediaQuery = {
    intial: deviceWidth() ? { width: 150, height: 150 } : { width: 200, height: 200 }, animate: deviceWidth() ? { width: 200, height: 200 } : { width: 400, height: 400 }, transition: { type: "spring", bounce: 0.4, duration: 4 }
  };

  return (
    <div className='min-h-screen md:mx-20 mx-8'>
      <p className='text-center text-3xl pt-10 font-bold text-black mb-10'>TOUCH WITH ME @</p>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 5, bounce: 0.5, type: "spring" }}
        className='mt-5 md:flex justify-between grid grid-col-12 gap-8 items-center'>
        {
          contactDetails.map((contactDetails: IContactDetails) => {
            return (
              <>
                <div className='md:flex md:justify-center md:items-center md:gap-3 text-black grid grid-cols-4 items-center' key={contactDetails.id}>
                  <motion.img src={contactDetails.icon} className='w-10 h:10' />
                  <div className='col-span-3'>
                    {
                      contactDetails.details.map((details) => {
                        return (
                          <>
                            {details}<br />
                          </>
                        )
                      })
                    }

                  </div>
                  <hr className='w-72 mt-4 md:w-0 md:mt-0' />
                </div>
              </>
            )
          })
        }
      </motion.div>
      <div className='w-full flex flex-col-reverse md:grid md:grid-cols-2 md:items-center'>
        <div className='flex justify-center mt-10 md:mt-20 mb-20'>
          <motion.div
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", bounce: 0.7, duration: 2 }}
          >
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="flex-col items-center">
                <input

                  className="w-full text-gray-700 border border-black rounded py-3 px-4 mb-5" type="text" placeholder="Full Name" style={{ height: "40px" }} value={contactUs.fullName} onChange={(e) => setContactUs({ ...contactUs, fullName: e.target.value })} />
                <input className="w-full text-gray-700 border border-black rounded py-3 px-4  mb-5" type="email" placeholder="Email" style={{ height: "40px" }} value={contactUs.email} onChange={(e) => setContactUs({ ...contactUs, email: e.target.value })} />
                <textarea className="w-full text-gray-700 border border-black rounded py-3 px-4 mb-3" placeholder='Message' style={{ height: "100px" }} value={contactUs.message} onChange={(e) => setContactUs({ ...contactUs, message: e.target.value })} />
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
                  Submit
                </button>
              </div>
            </form>
          </motion.div>

        </div>
        <div className='flex justify-center items-center mt-10'>
          <motion.img src='/contactus-1.png' alt='contactus image' initial={setAnimationWRTMediaQuery.intial} animate={setAnimationWRTMediaQuery.animate} transition={setAnimationWRTMediaQuery.transition} className={`${styles.contactImage}`} />
        </div>
      </div>
    </div>
  )
}

export default Contact;