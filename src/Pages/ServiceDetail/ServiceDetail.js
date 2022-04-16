import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {

    let {serviceId} = useParams();



    return (
        <div>
            <h2>Welcome to detail of product {serviceId}</h2>
        </div>
    );
};

export default ServiceDetail;