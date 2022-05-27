import React from 'react';
import { useParams } from 'react-router-dom';
import {useQuery} from 'react-query';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm'
import Loading from '../../Shared/Loading/Loading';
const stripePromise = loadStripe('pk_test_51L19G4DL7GXo3RyjkaAQ65hkhUGgnm3ePYitn5Kr8n2qYl3o4MSQiYekb0EOc0OBp0j9fLKrilvTG6r60lOmJwGi00HE13LjtN');
const Payment = () => {
    const {id} = useParams();
    const url = `http://localhost:5000/order/${id}`;
    const {data:product, isLoading} = useQuery(['product', id], () => fetch(url, {
        method: "GET",
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading />
    }
    console.log(product);
    return (
   <div className="hero max-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center lg:text-left">
        <div className="card w-full md:w-96  bg-white text-primary-content">
        <div className="card-body">
            <p className="text-secondary text-xl font-bold">Buyer Name: {product.name}</p>
        <h2 className="card-title">Pay For {product.productName}</h2>
        <h2 className="card-title">Please Pay:  {product.productName}</h2>
    </div>
    </div>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <Elements stripe={stripePromise}>
            <CheckoutForm product = {product} />
        </Elements>
      </div>
    </div>
  </div>
</div>
    );
};

export default Payment;