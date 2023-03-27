import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Payment = () => {
  const [state, setState] = useState([])

  const location = useLocation()

  useEffect(() => {

    const paymentId = location.pathname.replace('/payments/', '')

    const config = {
      method: 'get',
      url: `https://users-e87a.restdb.io/rest/payments/${paymentId}`,
      headers: {
        'Content-Type': 'application/json',
        'x-apikey': '63e26aaf478852088da67e61'
      }
    };

    axios(config)
      .then((response) => setState(response.data))
      .catch((error) => console.log(error))
  }, []);

  return (
    <>
      <section>
        <div>{state.student && state.student[0].name}</div>
        <div>{state.payment_schedule}</div>
        <div>{state.bill}</div>
        <div>{state.amount}</div>
        <div>{state.balance}</div>
        <div>{state.type}</div>
      </section>
    </>
  );
};
export default Payment;
