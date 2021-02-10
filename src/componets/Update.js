import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";
const Update = () => {
  const [state, setstate] = useState({
    email: "",
    password: "",
  });
  const mydata = useSelector((data) => data.myreducer);
  const history = useHistory();
  const id = mydata.id;
  console.log(id);
  function formHandler(e) {
    e.preventDefault();
  }
  function submitForm() {
    axios
      .put(`/users/${id}`, state)
      .then((data) => console.log(data.data))
      .catch((err) => console.log(err));
    console.log(`state output:${state.email}`);
    history.push("/users");
  }
  return (
    <div>
      <form onSubmit={formHandler}>
        Enter Updated data
        <br></br>
        <input
          type="text"
          onChange={(e) => setstate({ ...state, email: e.target.value })}
          name="email"
          defaultValue={mydata.email}
          required
        />
        <input
          type="password"
          onChange={(e) => setstate({ ...state, password: e.target.value })}
          name="password"
          defaultValue={mydata.password}
          required
        />
        <button onClick={submitForm} type="submit">
          Update
        </button>
      </form>
    </div>
  );
};

export default Update;
