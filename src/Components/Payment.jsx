import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Payment() {
  const location = useLocation();
  const [paymentMethod, setPaymentMethod] = useState('');
  const [grandTotal, setGrandTotal] = useState(0);

  useEffect(() => {
    // Check if grandTotal is available in location.state
    if (location.state && location.state.grandTotal) {
      setGrandTotal(location.state.grandTotal);
    }
  }, [location.state]);

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = src;

      script.onload = () => {
        resolve(true);
      };

      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async () => {
    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');

    if (!res) {
      alert('You are offline. Failed to load Razorpay SDK');
      return;
    }

    // Now that the SDK is loaded, you can proceed to create and open the Razorpay payment popup.
    const options = {
      key: "rzp_test_50qY2rY2Z3R8di",
      amount: grandTotal * 100, // Amount in paise (multiply by 100)
      currency: "INR",
      // Add other required options here
    };

    const razorpayInstance = new window.Razorpay(options);
    razorpayInstance.open();
  };

  return (
    <div className="container">
      <div className="row">
        {/* First Card */}
        <div className="col-md-4">
          {/* ... Card content ... */}
           <div className="card">
            <div className="card-img-top" alt="..." style={{ margin: "20px"}}>
              <h3>Address</h3>
              <p>Rohini Sector 24</p>
              <p>Anand Vihar, Beside Gt Road </p>
              <p>New Delhi, 123676</p>
            </div>
            <div className="card-img-top" alt="..." style={{ margin: "20px"}}>
              <h3>Order Summary</h3>
              <p>Golden Ring</p>
              <p>Color Yellow and Red</p>
              <p>Quantity: 2</p>
            </div>
            <div className="card-body">
              <h5 className="card-title">Grand Total</h5>
              <h1 className="card-text">{grandTotal}</h1>
            </div>
          </div>
          <button
            style={{
              backgroundColor: '#007bff',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              marginTop: '20px',
              cursor: 'pointer',
            }}
            onClick={displayRazorpay}
          >
            Continue and Pay
          </button>
        </div>
        {/* Third Card */}
      </div>
    </div>
  );
}

export default Payment;
