import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

//импортируем библиотеку axios в этот модуль

import axios from "axios";

const CoursesItem = (props) => {
  //сохраняем в переменной конфиг информацию, которую, трансформировав позже в http запрос, буду отправлять на сервер бекэндеру


  const config = {
    method: 'delete',
    url: `https://users-e87a.restdb.io/rest/courses/${props.id}`,
    headers: {
      'Content-Type': 'application/json',
      'x-apikey': '63e26aaf478852088da67e61'
    }
  };

  //сохраняем в переменной функцию, в которой аксиос превращает информацию конфига в http запрос и отправляет на бекэнд. Далее либо выводит ошибку, либо удаляет курс
  //что значит респонс???
  const deleteCourse = () => {
    axios(config)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error))

    toast("Deleted course.");

    const newState = props.courses.filter(course => course._id !== props.id);
    props.setCourses(newState);
  };

  return (
    <tr className="courses-list__table-row">
      <ToastContainer />
      <td className="courses-list__table-data"><Link to={`/courses/${props.id}`}>{props.title}</Link></td>
      <td className="courses-list__table-data">{props.description}</td>
      <td className="courses-list__table-data">{props.hours}</td>

      {/* добавляем имиджу онклик */}
      <td>
        <img src="crud-operations/svg/pencil-crud.svg" alt="bucket" onClick={deleteCourse} />
        {console.log('PROPSEIO:', props)}
        <Link to={`/courses/${props.id}/edit`} state={{ ...props }}><img src="crud-operations/svg/pencil-crud.svg" alt="pencil" /></Link>
      </td>
    </tr>
  );
};

export default CoursesItem;
