import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'

const Register = () => {

    const handleRegister= event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
    }

    return (
        <div className='register-form'>
            <h2 style={{textAlign:'center'}}>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="name" placeholder='Your Name'/>
                <input type="email" name="email" id="email" placeholder='Your Email'/>
                <input type="password" name="password" id="password" placeholder='Password'/>
                <input type="submit" value="Register" />
            </form>
            <p className='text-center fs-4 '>Already have an account ? <Link to='/login' className='text-decoration-none'>Please Login</Link></p>
            
        </div>
    );
};

export default Register;