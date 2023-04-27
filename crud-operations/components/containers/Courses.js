//указываем, что в этот модуль импортируем (в этом модуле он будет доступен) реакт, юзэффектс, юзстате

import React, { useEffect, useState } from "react";
import InformSearch from "../InformSearch";
import CoursesItem from "../CoursesItem";

//импортируем в этот модуль библиотеку аксиос, которая поможет потом нам передать запрос бекэнду

import axios from "axios";
import { Link } from "react-router-dom";

//присваиваем переменной конфиг информацию о запросе на бекэнд (то есть то, что мы будем перерсылать на бекэнд: метод, урл-адрес, хедерсы)

import { ToastContainer, toast } from 'react-toastify';

const config = {
  method: 'get',
  url: 'https://users-e87a.restdb.io/rest/courses',
  headers: {
    'Content-Type': 'application/json',
    'x-apikey': '63e26aaf478852088da67e61'
  }
};

const Courses = () => {

  //деструктурирующее присваивание. 
  //стейт это карман, куда мы сохраняем полученные с бекэнда данные это переменная. Сэтстейт нужен, чтобы присваивать что-то стейту.


  const [state, setState] = useState([]) // я верну массив из 2х элементов. Этот метод - сеттер, его противоположность - геттер - это тот, который только возвращает любую переменную
  const [coursesDefault, setCoursesDefault] = useState([])
  const [sortOrderForvard, setSortOrderForvard] = useState(true)



  // let pepe
  // let pepe = {a: 1, b: 2}
  //функция, которая на вход принимает другую функцию 

  useEffect(() => {

    //передаю аксиусу данные из конфига, чтобы аксиос сделал из них http запрос и отправил на бекэнд

    axios(config)

      //если данные с бекэнда загрузятся, то должно выполнится зэн - это как иф и тогда изменится стейт
      //стрелочная ананимная функция, не присваиваем ее переменной, так как она сразу идет в работу

      .then((respons) => {
        setState(respons.data)
        setCoursesDefault(respons.data)
      })


      //если произойдет ошибка, данные с бекэнда не загрузятся, вывести в консоль ошибку

      .catch((error) => (console.log(error)))

    //пустые квадратные скобки - это условие, когда юзЭффект вызовет первый аргумент. Первый аргумент - это функция.



  }, [])

  const onClickUp = (evt) => {
    if (sortOrderForvard == true) {

      const coursesArray = [...state]
      coursesArray.sort((x, y) => x.title > y.title ? 1 : -1)
      setState(coursesArray)

      toast("This is filter!")
    }
    else {
      const coursesArray = [...state]
      coursesArray.sort((x, y) => x.title < y.title ? 1 : -1)
      setState(coursesArray)

      toast("This is filter!")
    }

    setSortOrderForvard(!sortOrderForvard)
  };

  return (
    //jsх - это код, похожий по виду на html. Чтобы вставить сюда js, надо использовать фигурные скобочки.

    <section className="courses-list">
      <InformSearch courses={state} setSearchResalt={setState} coursesDefault={coursesDefault} />
      <div className="students-list__search">
        <h2 className="students-list__title">
          Courses List
        </h2>
        <div>Deptors</div>
        <ToastContainer />
        <div className="students-list__buttons-container">

          <img src="./svg/arrows-up-down-crud.svg" alt="arrows up down" onClick={onClickUp} />

          <Link className="students-list__button" to="/courses/new">ADD NEW COURSE</Link>
        </div>
      </div>
      <table className="courses-list__table">
        <thead>
          <tr className="courses-list__table-row">
            <th className="courses-list__table-head">title</th>
            <th className="courses-list__table-head">description</th>
            <th className="courses-list__table-head">hours</th>
          </tr>
        </thead>
        <tbody>

          {/* использую метод мап (похоже на forEach), которое позволит пройтись по всем элементам массива, присвоенного стате, и изменить их.
         присваиваем пропсам компонента CoursesItem(через математический знак равно) значения, берущиеся из данных, присланных с бекэнда
         пишем в фигурных скобках, так как это js, вставленный в react */}
          {state.map((course) => <CoursesItem
            title={course.title}
            description={`${course.description.substr(0, 20)}...`}
            hours={course.how_many_hours}
            id={course._id}
            key={course.title}
          />)}


          {/*<CoursesItem title="Maths" description="deep course" hours="130h" />
          <CoursesItem title="Maths" description="deep course" hours="130h" />
  <CoursesItem title="Maths" description="deep course" hours="130h" />*/}
        </tbody>
      </table>
    </section>
  )
};

export default Courses;
