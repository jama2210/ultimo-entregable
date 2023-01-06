import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./styles/login.css";

const Login = () => {
  const navigate = useNavigate();

  const [isLogged, setIsLogged] = useState(false);

  const { handleSubmit, register, reset } = useForm();

  const submit = (data) => {
    const URL = "https://e-commerce-api.academlo.tech/api/v1/users/login";
    axios
      .post(URL, data)
      .then((res) => {
        console.log(res.data.data);
        localStorage.setItem("token", res.data.data.token);
        setIsLogged(true);
        navigate("/");
      })
      .catch((err) => console.log(err));

    reset({
      email: "",
      password: "",
    });
  };

  useEffect(() => {
    const condition = localStorage.getItem("token") ? true : false;
    setIsLogged(condition);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLogged(false);
  };

  if (isLogged) {
    return (
      <div>
        <h1>User Logged </h1>
        <button onClick={handleLogout}>logout</button>
      </div>
    );
  }

  return (
    <section className="login_container">
      <div className="login_content">
        <form className="login" onSubmit={handleSubmit(submit)}>
          <strong>Welcome! Enter your email and password to continue</strong>
          <div className="test_data">
            <b>Test data</b>
            <div className="field">example@mail.com</div>
            <div className="field">password123</div>
          </div>
          <div className="input_container">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" {...register("email")} />
          </div>
          <div className="input_container">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" {...register("password")} />
          </div>
          <button className="login_btn">Login</button>
          <div className="sign_up">
            <span>Don't have an account?</span>
            <button className="sign_btn">Sign up</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
