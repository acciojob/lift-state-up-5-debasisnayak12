import React from "react";

const Child = ({ setisLoggedIn }) => {

  function handleSubmit(e){
    e.preventDefault();
    setisLoggedIn(true);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" />
        </label>
        <label>
          Password:
          <input type="password" />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Child;
