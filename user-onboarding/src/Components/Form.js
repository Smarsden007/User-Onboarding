import { toHaveErrorMessage } from "@testing-library/jest-dom/dist/matchers";
import React from "react";

const Form = (props) => {
  const { change, submit, errors } = props;
  const { username, email, password, checked } = props.values;

  const onChange = (e) => {
    const { name, value, checked, type } = e.target;
    const newVal = type === "checkbox" ? checked : value;
    change(name, newVal);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    submit();
  };

  return (
    <div>
      <h1>My magic form!!!</h1>
      <p>{error.username}</p>
      <p>{errors.password}</p>
      <p>{error.email}</p>
      <p>{error.tos}</p>
      <form onSubmit={onSubmit}>
        <label>
          {" "}
          Name:
          <input type="text" name="name" value={username} onChange={onChange} />
        </label>
        <label>
          {" "}
          Email:
          <input type="email" name="email" value={email} onChange={onChange} />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
          />
        </label>
        <label>
          Terms of Service:
          <input
            type="checkbox"
            name="tos"
            value={checked}
            onChange={onChange}
          />
        </label>
        <input type="submit" value="Create a friend" />
      </form>
    </div>
  );
};

export default Form;
