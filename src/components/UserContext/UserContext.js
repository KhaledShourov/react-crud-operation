import React, { createContext, useState } from 'react';

export const UserContext = createContext();
export const UserProvider =(props)=>{
  const [users, setUsers] = useState([
    {id:1, name: 'Khaled', position : 'React Developer', salary : 27000},
    {id:2, name: 'Kamal', position : 'Web Designer', salary : 25000},
    {id:3, name: 'Jamal', position : 'Graphic Designer', salary : 20000}
  ])
  return (
  <UserContext.Provider value = {[users, setUsers]}>
    {props.children}
  </UserContext.Provider>
  )
}