import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_a5x11zp', 'template_fsze86t', form.current, 'Mzc2YsGN8QJzGdYSC')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="container">
            <form ref={form} onSubmit={sendEmail} style={{display: 'flex', flexDirection: 'column'}}>
                <div style={{margin: "1rem"}}>
                    <label>Name</label>
                    <input type="text" name="user_name" />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" name="user_email" />
                </div>
                <div>
                    <label>Message</label>
                    <textarea name="message" />
                </div>
                    <input type="submit" value="Send" style={{width: "50%"}}/>
            </form>
        </div>
    );
};

export default Contact; 