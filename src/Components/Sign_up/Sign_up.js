import React, { useState } from 'react';
import './Sign_up.css';
import { Link } from 'react-router-dom';

function Sign_up() {
    const [phoneNumber, setPhoneNumber] = useState('');

    const handlePhoneNumberChange = (e) => {
        // Ensure that only digits are allowed
        const value = e.target.value.replace(/\D/g, '');
        setPhoneNumber(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (phoneNumber.length !== 10) {
            alert('Phone number must be 10 digits');
            return;
        }
    };

    return (
        <div>
            <div className="container" style={{ marginTop: '5%' }}>
                <div className="signup-grid">
                    <div className="signup-text">
                        <h1>Sign Up</h1>
                    </div>
                    <div className="signup-text1" style={{ textAlign: 'left' }}>
                        Already a member? <span><Link to="/login" style={{ color: '#2190FF' }}> Login</Link></span>
                    </div>
                    <div className="signup-form">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" name="name" id="name" required className="form-control"
                                    placeholder="Enter your name" aria-describedby="helpId" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone</label>
                                <input type="tel" name="phone" id="phone" required className="form-control"
                                    value={phoneNumber} onChange={handlePhoneNumberChange}
                                    placeholder="Enter your phone number (10 digits)" aria-describedby="helpId" />
                                {phoneNumber.length !== 10 && <small className="text-danger"><br/>Phone number must be 10 digits</small>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" id="email" required className="form-control"
                                    placeholder="Enter your email" aria-describedby="helpId" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input name="password" id="password" required className="form-control"
                                    placeholder="Enter your password" aria-describedby="helpId" />
                            </div>
                            <div className="btn-group">
                                <button type="submit" className="btn btn-primary mb-2 mr-1 waves-effect waves-light">Submit</button>
                                <button type="reset" className="btn btn-danger mb-2 waves-effect waves-light">Reset</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sign_up;
