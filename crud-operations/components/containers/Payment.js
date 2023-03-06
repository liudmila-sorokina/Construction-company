import React from "react";
import InformSearch from "../InformSearch";
import PaymentsItem from "../PaymentsItem";

const Payment = () => {
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
            <th className="payments-list__table-head">Balance amount</th>
            <th className="payments-list__table-head">Date</th>
            <th className="payments-list__table-head"></th>
          </tr>
        </thead>
        <tbody>
        <PaymentsItem name="Karthi" paymentSchedule="First" bill="00012223" amountPaid="INR 35,000" balance="INR 55,000" data="08-Dec, 2021" />
        <PaymentsItem name="Karthi" paymentSchedule="First" bill="00012223" amountPaid="INR 35,000" balance="INR 55,000" data="08-Dec, 2021" />
        <PaymentsItem name="Karthi" paymentSchedule="First" bill="00012223" amountPaid="INR 35,000" balance="INR 55,000" data="08-Dec, 2021" />
        </tbody>
      </table>
    </section>
  )
};

export default Payment;
