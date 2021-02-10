import React, { useState } from "react";
import axios from "axios";
const PostUser = (props) => {
  const [state, setstate] = useState({
    email: "",
    password: "",
  });

  function submitForm() {
    const url = "http://localhost:2000/users";
    const data = state;
    axios
      .post(url, data)
      .then((data) => data)
      .catch((err) => err);
  }
  function formHandler(e) {
    e.preventDefault();
  }
  return (
    <div>
      <form onSubmit={formHandler}>
        Note:All credentials are necassary to fill
        <br></br>
        <input
          type="text"
          onChange={(e) => setstate({ ...state, email: e.target.value })}
          name="email"
          defaultValue={props.email}
          placeholder="Email"
        />
        <input
          type="password"
          onChange={(e) => setstate({ ...state, password: e.target.value })}
          name="password"
          defaultValue={props.password}
          placeholder="Password"
        />
        <button onClick={submitForm} type="submit">
          Add user
        </button>
      </form>
    </div>
  );
};

export default PostUser;
//const url= http://localhost:2000/users
