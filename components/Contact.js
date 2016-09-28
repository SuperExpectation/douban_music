import React from 'react';
import '../styles/font-awesome.css'
import '../styles/contact.css'

const Contact = () => {
    return (
        <section className="contact">
        <div className="contact_main">
        	<div className="contact_media">
	        	<h4>News&Updates</h4>
	        	<p>For press or media inquiries please contact:</p>
	        	<p>pr@xxxx.com</p>
        	</div>
        	
        	<div className="contact_us">
	        	<h4>Contact </h4>
	        	<p>Make a business inquiry, contact our team, or just let us know what's on your mind.</p>
	        	<p><strong>Phone:</strong><br/>010-87248888</p>
                <p><strong>Email:</strong><br/>info@xxxx.com</p>
        	</div>
            <div className="contact_social">
                <i className="fa fa-qq fa-4x"  ></i>
                <i className="fa fa-weixin fa-4x"  ></i>
                <i className="fa fa-weibo fa-4x"  ></i>
                <i className="fa fa-twitter fa-4x"  ></i>
            </div>
        </div>
        </section>
    );
};
 
export default Contact;