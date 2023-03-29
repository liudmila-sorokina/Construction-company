import React, { useEffect, useState } from "react";
import InformSearch from "../InformSearch";
import PaymentsItem from "../PaymentsItem";
import axios from "axios";

const config = {
  method: 'get',
  url: 'https://users-e87a.restdb.io/rest/payments',
  headers: {
    'Content-Type': 'application/json',
    'x-apikey': '63e26aaf478852088da67e61'
  }
};

const Payments = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    axios(config)
      .then((response) => setState(response.data))
      .catch((error) => console.log(error))
  }, [])

  return (
    <section className="payments-list">
      <InformSearch />
      <div className="students-list__search">
        <h2 className="students-list__title">
          Payment Details
        </h2>
        <div className="students-list__buttons-container">
          <button className="students-list__filter">
            <img src="./svg/arrows-up-down-crud.svg" alt="arrows up down" />
          </button>
        </div>
      </div>
      <table className="payments-list__table">
        <thead>
          <tr className="payments-list__table-row">
            <th className="payments-list__table-head">Name</th>
            <th className="payments-list__table-head">Payment Schedule</th>
            <th className="payments-list__table-head">Bill Number</th>
            <th className="payments-list__table-head">Amount Paid</th>
            <th className="payments-list__table-head">Payment type</th>
            <th className="payments-list__table-head">Date</th>
            <th className="payments-list__table-head"></th>
          </tr>
        </thead>
        <tbody>
          {state.map((payment) => <PaymentsItem
            name={payment.student && payment.student[0].name}
            paymentSchedule={payment.payment_schedule}
            bill={payment.bill}
            amount={payment.amount}
            balance={payment.type}
            data={payment.created_at}
            key={payment.bill}
            id={payment._id} />)}
        </tbody>
      </table>
    </section>
  )
};

export default Payments;
