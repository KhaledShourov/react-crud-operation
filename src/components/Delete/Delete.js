import React, { useContext } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../UserContext/UserContext';
import './Delete.css';
const Delete = () => {
  const [users, setUsers] = useContext(UserContext);
  const {id} = useParams()

  const deleteUser =()=>{
    const user = users.filter((user) => user.id != id);
    setUsers(user)
  }



  return (
    <div>
     <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>Are you sure?</Modal.Title>
      </Modal.Header>

  <Link to ="/">
    <Button className="deleteBtn" variant="info"> Cancel
    </Button>
    <Button onClick ={()=>deleteUser(id)} variant="danger"> Delete
    </Button> 
  </Link>
  <Modal.Footer>
  </Modal.Footer>
  </Modal.Dialog>
    </div>
  );
};

export default Delete;