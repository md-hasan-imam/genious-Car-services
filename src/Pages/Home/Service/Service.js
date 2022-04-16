import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {

    const {name, img, description, price ,id } = service;

    const navigate =useNavigate();
    const navigateToServiceDetails = id =>{
        navigate(`/service/${id}`);
    }

    return (
        <div className='service'>
            <img src={img} alt="" className='w-100 rounded-top'/>
            <h3 className='mt-3'>{name}</h3>
            <p>Price: $ {price}</p>
            <p>{description}</p>
            <button  className='btn btn-primary mb-3' onClick={ () =>navigateToServiceDetails(id) }>Book Now</button>
        </div>
    );
};

export default Service;