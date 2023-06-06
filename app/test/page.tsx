"use client"
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Link from 'next/link';

const ContactUs = () => {
    const form = useRef();
    const [toggle, setToggle] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_pt8oqu9', 'template_8mlc6i3', form.current, 'n6wpm0C1V5Zdjslse')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    console.log("Hello i am toggle value : ", toggle);
    return (
        <>
            <h1 onClick={() => setToggle(!toggle)}>Avinash</h1>
        </>
    );
};

export default ContactUs
