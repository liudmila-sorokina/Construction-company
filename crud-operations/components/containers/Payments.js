import React, { useEffect, useState } from "react";
import InformSearch from "../InformSearch";
import PaymentsItem from "../PaymentsItem";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

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
  //создаю переменную и делаю деструктурирующее присваивание, чтобы с бэкэнда пейментсы сохранялись не только в стате, но и в пейментс дефолт
  //это нужно, чтобы список пейментсов в стате менялся при поиске, а при пустой строке поиска выдавался неизмененный список пейментсов
  const [paymentsDefault, setPaymentsDefault] = useState([])
  const [sortOrderForvard, setSortOrderForvard] = useState(true)

  useEffect(() => {
    axios(config)
      .then((response) => {
        setState(response.data)
        //с помощью фксиоса передаю запрос на бек и получаю список пейментсов
        //тут с помощью функции зен передаю список в функцию setPaymentsDefault которая меняет переменную-карман paymentsDefault, помещая в нее список пейментсов
        setPaymentsDefault(response.data)
      })
      .catch((error) => console.log(error))

    return () => {
      alert("Goodbye!")
    }

  }, [])


  const onClick = (evt) => {
    if (sortOrderForvard == true) {
      const paymentsArray = [...state]
      paymentsArray.sort((x, y) => x.type > y.type ? 1 : -1)
      setState(paymentsArray)

      toast("Payment's filter");
    }
    else {
      const paymentsArray = [...state]
      paymentsArray.sort((x, y) => x.type < y.type ? 1 : -1)
      setState(paymentsArray)

      toast("Payment's filter");
    }

    setSortOrderForvard(!sortOrderForvard)
  }

  //добавляю в компонент информСерч новые пропсы, что с их помощью перердать список пейментсов в компонент информСерч

  return (
    <section className="payments-list">

      <InformSearch payments={state} setSearchResalt={setState} paymentsDefault={paymentsDefault} />
      <div className="students-list__search">
        <h2 className="students-list__title">
          Payment Details
        </h2>
        <div>Deptors</div>
        <div className="students-list__buttons-container">

          <img src="./svg/arrows-up-down-crud.svg" alt="arrows up down" onClick={onClick} />
          <ToastContainer />
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
        {console.log(state)}
        <tbody>
          {state.map((payment) => <PaymentsItem
            name={payment.student && payment.student[0] && payment.student[0].name}
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
