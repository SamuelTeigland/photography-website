import React, { useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';

function App() {
  const [product] = useState({
    name: 'Photo',
    price: 100,
  });

  const handleToken = async (token, addresses) => {
    const response = await fetch('/api/charge', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: product.price * 100,
        source: token.id,
        receipt_email: addresses.email,
      }),
    });

    const data = await response.json();
    if (data.message === 'Payment successful') {
      alert('Payment successful!');
    } else {
      alert('Payment failed!');
    }
  };

  return (
    <div className="App">
      <h1>{product.name}</h1>
      <StripeCheckout
        stripeKey={process.env.REACT_APP_STRIPE_PUBLIC_KEY}
        token={handleToken}
        amount={product.price * 100}
        name={product.name}
        billingAddress
        shippingAddress
      />
    </div>
  );
}

export default App;
