import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../UserContext/UserContext';
import {Button} from 'react-bootstrap'
import './Read.css';
const Read = () => {
   const [users, setUsers] = useContext(UserContext);
  const {id} = useParams()

    const user = users.filter((user) => user.id == id);
    console.log(user[0])

  return (
    <div className="read p-2 rounded shadow bg-primary mt-5">
      <h3>ID:{user[0].id}</h3>
      <h3>Name:{user[0].name}</h3>
      <h3>Position:{user[0].position}</h3>
      <h3>Salary:{user[0].salary}</h3>
      <Link to="/">
       <Button variant = "info">Back to Home </Button>
       </Link>
    </div>
  );
};

export default Read;