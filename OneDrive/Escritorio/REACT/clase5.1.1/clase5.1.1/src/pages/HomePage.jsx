import React, { useRef } from "react";

const HomePage = ({ setFormValues }) => {

  const handleSubmit = e => {
    e.preventDefault()
    setFormValues({
      username: e.target.username.value.trim(),
      password: e.target.password.value.trim()
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Username
          <input id="username" type="text" />
        </label>
        <label>
          Password
          <input id="password" type="password" />
        </label>
        <button>Login</button>
      </form>
    </div>
  );
};

export default HomePage;
