import React, { useEffect, useState } from "react";
import axios, { isCancel, AxiosError } from "axios";
import { useLocation } from "react-router-dom";



const Student = () => {
  const [state, setState] = useState([]);
  //создать связку стейт и сетстейт, последний нужен, чтобы что-то присваивать стейт
  const location = useLocation()

  useEffect(() => {
    const studentId = location.pathname.replace('/students/', '')

    const config = {
      method: 'get',
      url: `https://users-e87a.restdb.io/rest/students/${studentId}`,
      headers: {
        'Content-Type': 'application/json',
        'x-apikey': '63e26aaf478852088da67e61'
      }
    };

    axios(config)
      .then((response) => setState(response.data))
      .catch((error) => console.log(error))
  }, [])

  return (
    <section>
      <div>{state.name}</div>
      <div>{state.email}</div>
      <div>{state.phone}</div>
    </section>
  );
};

export default Student;
