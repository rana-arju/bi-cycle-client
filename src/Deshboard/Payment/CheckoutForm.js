import React, {useState, useEffect} from 'react';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';

const CheckoutForm = ({product}) => {
  const {_id: id, price, email, productName} = product;
      const stripe = useStripe();
      const elements = useElements();
      const [cardError, setCardError] = useState('');
      const [processing, setProcessing] = useState(false);
      const [cardSuccess, setCardSuccess] = useState('');
      const [clientSecret, setClientSecret] = useState("");
      const [transactionId, setTransactionId] = useState("");
      useEffect(() => {
      fetch("https://by-cycle.onrender.com/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem('accessToken')}`

        },
        body: JSON.stringify({price}),
      })
      .then(res => res.json())
      .then(data => {
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret)
        }
      })
        
  }, [price]);

    const handleSubmit= async(event)  => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
    const card = elements.getElement(CardElement);
     if (card == null) {
      return;
    }
     const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });
    setCardError(error?.message)
    setCardSuccess(" ");
    setProcessing(true);
    //confirm card payment
  const {paymentIntent, error: intentError} = await stripe.confirmCardPayment(clientSecret,
  {
    payment_method: {
      card: card,
      billing_details: {
        name: productName,
        email: email
      },
    },
  },
);
  if (intentError) {
    setCardError(intentError?.message);
    setProcessing(false)
  }else{
    setCardError('');
    setTransactionId(paymentIntent.id);
    setCardSuccess('Your Payment is Complated');
    const payment = {
      order: id,
      transactionId: paymentIntent.id,
    }
    fetch(`https://by-cycle.onrender.com/order/${id}`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(payment)
    })
    .then(res => res.json())
    .then(data => {
      setProcessing(false);
      console.log(data);
    })
  }
    }
    return (
      <>
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className='btn btn-accent px-5 btn-xs mt-5' type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>
    </form>
    {
      cardError && <p className='text-red-500'>{cardError}</p>
    }
    {
      cardSuccess && <div className='text-green-500'>
        <p>{cardSuccess}</p>
        <p>Your Transaction id: <span className='text-orange-500 font-bold'>{transactionId}</span></p>
        </div>
    }
    </>
    );
};

export default CheckoutForm;