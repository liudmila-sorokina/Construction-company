import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const PaymentsUpdate = () => {
  const [state, setState] = useState({});
  const location = useLocation()

  useEffect(() => {
    setState(location.state)
  }, []);

  const tempor = location.pathname.replace('/payments/', '')

  const paymentId = tempor.replace('/edit', '')

  const nameChange = (evt) => {
    const newState = { ...state, name: evt.target.value }
    setState(newState)
  };

  const scheduleChange = (evt) => {
    const newState = { ...state, paymentSchedule: evt.target.value }
    setState(newState)
  };

  const billChange = (evt) => {
    const newState = { ...state, bill: evt.target.value }
    setState(newState)
  };

  const amountChange = (evt) => {
    const newState = { ...state, amount: evt.target.value }
    setState(newState)
  };

  const typeChange = (evt) => {
    const newState = { ...state, balance: evt.target.value }
    setState(newState)
  };

  const dataChange = (evt) => {
    const newState = { ...state, data: evt.target.value }
    setState(newState)
  };

  const onClick = (evt) => {
    evt.preventDefault();

    toast("Payment updated");

    const obj = {}
    obj.created_at = state.data
    obj.amount = state.amount

    obj.type = state.balance

    obj.bill = state.bill

    obj.payment_schedule = state.paymentSchedule

    const paymentsDataChange = JSON.stringify(obj);

    const config = {
      method: 'put',
      url: `https://users-e87a.restdb.io/rest/payments/${paymentId}`,
      headers: {
        'Content-Type': 'application/json',
        'x-apikey': '63e26aaf478852088da67e61'
      },
      data: paymentsDataChange
    };

    axios(config)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error))
  }

  return (
    <>
      <form className="students-form" action="#" method="put">
        <label className="students-form__label">
          name
          <input type="text" name="name" placeholder="name" className="students-form__input" value={state.name} onChange={nameChange} disabled={true} />
        </label>
        <label className="students-form__label">
          payment schedule
          <input type="text" name="paymentSchedule" placeholder="Payment Schedule" className="students-form__input" value={state.paymentSchedule} onChange={scheduleChange} />
        </label>
        <label className="students-form__label">
          bill
          <input type="number" name="bill" placeholder="bill" className="students-form__input" value={state.bill} onChange={billChange} disabled={true} />
        </label>
        <label className="students-form__label">
          amount paid
          <input type="number" name="amountPaid" placeholder="Amount Paid" className="students-form__input" value={state.amount} onChange={amountChange} />
        </label>
        <label className="students-form__label">
          payment type
          <input type="text" name="paymentType" placeholder="Payment Type" className="students-form__input" value={state.balance} onChange={typeChange} />
        </label>
        <label className="students-form__label">
          date
          <input type="date" name="date" placeholder="Date" className="students-form__input" value={state.data} onChange={dataChange} />
        </label>
        <input type="submit" value="submit" name="submit" className="students-form__button" onClick={onClick} />
        <ToastContainer />
      </form>
    </>
  );
};
export default PaymentsUpdate;
