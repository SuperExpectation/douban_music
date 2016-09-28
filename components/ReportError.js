import React from 'react';
import '../styles/reportError.css'

const ReportError = () => {
    return (
    	<div>
	        <h4>{"What's Wrong With This Page?"}</h4>
	        <div className="report_main">
		        <form className="report_form">
			        <div className="input-block">
			        	<label>Name</label>
			        	<input id="report_user_name" maxlength="40" type="text"></input>
			        </div>
			        <div className="input-block">
			        	<label>Email</label>
			        	<input id="report_user_email" maxlength="40" type="text"></input>
			        	<span>ex:james@gmail.com</span>
			        </div>
			        <div className="input-block">
			        	<label>Phone Number</label>
			        	<input id="report_user_phone" maxlength="20" type="text"></input>
			        	
			        </div>
			        <div className="input-block">
			        	<label>Subject</label>
			        	<input id="report_subject" maxlength="40" type="text"></input>        	
			        </div>
			        <div className="input-block">
			        	<label>Category</label>
			        	<select id="report_category"  >
			        		<option value>--Pick a Category--</option>
			        		<option value="Site Bug">Site Bug</option>
			        		<option value="Unsbuscribe">Unsbuscribe</option>
			        		<option value="General Question">General Question</option>
			        		<option value="Quality issue">Quality issue</option>
			        		<option value="Praise/Complaints/Suggestions">Praise/Complaints/Suggestions</option>
			        	</select>        	
			        </div>
			        <div className="input-block">
			        	<label>Message</label>
			        	<textarea id="report_message" maxlength="40" type="text"></textarea>        	
			        </div>
			        <div className="button-row">        	
			        	<input value="Submit" className="report_submitBtn" type="submit"></input>
			        </div>
		        </form>
	        </div>
        </div>
    );
};
 
export default ReportError;