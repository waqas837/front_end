import React, { useState } from "react";
import axios from "axios";
import {useHistory} from "react-router-dom"
import { data_delete } from "../store/actions/actions";
import { useDispatch} from "react-redux";
import "../App.css";
import PostUser from "./PostUser";
const ShowUsers = () => {
  //we can declare many states
  const [state, setstate] = useState([]);
  const history = useHistory()
  const dispatch = useDispatch();
  function userData() {
    axios
      .get("/users/")
      .then((data) => setstate(data.data))
      .catch((err) => console.log(err));
  }
  userData();
//deleted
  function deleted(id) {
    axios
      .delete(`/users/${id}`)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }
  //edit function
  const edit = () => {
  history.push("/update")
  };

  return (
    <div className="dataShow">
     
      <PostUser/>

      {state.map((val) => (
        <>
          Email: <li>{val.email}</li>
          Password : <li>{val.password}</li>
          <button //actually this logic is so simple
            onClick={() => deleted(val._id)} //notice out that we have called a simple function onclcik and we passed that id as argument to that function and here it is no use of redux
            className="btn btn-danger"
          >
            Delete
          </button>
          <button
            onClick={() => (
              edit(),
              dispatch(data_delete(val._id,val.email, val.password))
            )}
          >
            Edit
          </button>
       
        </>
      ))}
    </div>
  );
};

export default ShowUsers;
