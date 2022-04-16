import React from 'react';

const Footer = () => {

    const date = new Date();
    const year = date.getFullYear();


    return (
        <div className='text-center mt-5 '>
            <footer>
                <p><small>copyright &copy; {year}</small></p>
            </footer>
        </div>
    );
};

export default Footer;