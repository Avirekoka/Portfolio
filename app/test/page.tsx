"use client"
import React, { useRef, useState } from 'react';


const ContactUs = () => {
    const form = useRef();
    const [toggle, setToggle] = useState(false);

    console.log("Hello i am toggle value : ", toggle);
    return (
        <>
            <h1 onClick={() => setToggle(!toggle)}>Avinash</h1>
        </>
    );
};

export default ContactUs
