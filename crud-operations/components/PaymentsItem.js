import React from "react";

const PaymentsItem = (props) => {
  return (
    <tr className="payments-list__table-row">
      <td className="payments-list__table-data">{props.name}</td>
      <td className="payments-list__table-data">{props.paymentSchedule}</td>
      <td className="payments-list__table-data">{props.bill}</td>
      <td className="payments-list__table-data">{props.amountPaid}</td>
      <td className="payments-list__table-data">{props.balance}</td>
      <td className="payments-list__table-data">{props.data}</td>
      <td className="payments-list__table-data">
        <img src="crud-operations/svg/eye-crud.svg" alt="eye" />
      </td>
    </tr>
  );
};

export default PaymentsItem;
