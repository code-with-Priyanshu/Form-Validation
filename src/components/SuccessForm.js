import React from 'react'
import { useLocation } from 'react-router-dom';
import './SuccessForm.css';

const SuccessForm = () => {
    const location = useLocation();
    const formValues = location.state;
    return (
        <div className="main">
            <div className="display">
                <h1>Form Submission Successful</h1>
                <div className="para">
                    <p>First Name: {formValues.firstname}</p>
                    <p>Last Name: {formValues.lastname}</p>
                    <p>Username: {formValues.username}</p>
                    <p>Email: {formValues.email}</p>
                    <p>Password: {formValues.password}</p>
                    <p>Phone No: {formValues.countryCode} {formValues.phoneNo}</p>
                    <p>Country: {formValues.country}</p>
                    <p>City: {formValues.city}</p>
                    <p>Pan No: {formValues.panNo}</p>
                    <p>Aadhar No: {formValues.AadharNo}</p>
                </div>

            </div>
        </div>
    )
}

export default SuccessForm
