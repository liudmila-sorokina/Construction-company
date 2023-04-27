import React, { useEffect, useContext, useState } from "react";
import { MessageContext } from "./MessageContext";
import { ToastContainer, toast } from 'react-toastify';

const InformSearch = (props) => {
  const value = useContext(MessageContext);
  const [state, setState] = useState('')

  useEffect(() => {
    console.log("InformSearch done")

    console.log(value)

    setState({ name: value.studentName })
  }, [])

  const onChange = (evt) => {

    toast("You are searching something!");

    if (props.students) {
      if (evt.target.value !== "") {
        const searchStudent = props.students.filter((studentObj) => studentObj.name.match(new RegExp(evt.target.value)))

        props.setSearchResalt(searchStudent)
      }
      else {
        props.setSearchResalt(props.studentsDefault)
      }
    }
    if (props.courses) {
      if (evt.target.value !== "") {
        const searchCourses = props.courses.filter((coursObj) => coursObj.title.match(new RegExp(evt.target.value)))

        props.setSearchResalt(searchCourses)
      }
      else {
        props.setSearchResalt(props.coursesDefault)
      }
    }
    //добавляю новое условие, для начала указав, что условие должно сработать, когда в этот компонент будет перердан список пейментсов

    if (props.payments) {
      //если содержимое поля поиска НЕ пустая строка, то выполнить функцию: filter и math
      //вспомнить, что это за методы
      if (evt.target.value !== "") {
        console.log(evt.target.value)

        const searchPayments = props.payments.filter((paymentsObj) => paymentsObj.student && paymentsObj.student[0].name.match(new RegExp(evt.target.value)))
        props.setSearchResalt(searchPayments)


      }
      else {
        props.setSearchResalt(props.paymentsDefault)
      }
    }

  }
  //в инпуте поиска стоит обработчик событий ончандж

  return (
    <div className="information__forms-container">
      <MessageContext.Consumer>
        {(value) => <div>{value.message}</div>}
      </MessageContext.Consumer>
      <div>{props.value3}</div>
      <div>{state.name}</div>
      <a><img src="./svg/button-crud.svg" className="information__img-arrow" /></a>
      <div className="information__inputs-container">
        <form>
          <input type="search" name="search" placeholder="Search..." className="information__input" onChange={onChange} />
        </form>
        <ToastContainer />
        <img src="./svg/bell-crud.svg" className="information__bell-button" alt="bell" />
      </div>
    </div>
  );
};

export default InformSearch;
