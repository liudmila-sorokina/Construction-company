import React from "react";
import { Link } from "react-router-dom";

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
       <Link to={`/payments/${props.id}`}> <img src="crud-operations/svg/eye-crud.svg" alt="eye" /> </Link>
      </td>
    </tr>
  );
};

export default PaymentsItem;
