import React, { useState, useContext } from "react";
import "./Login.css";
import Avatar from "../../assets/images/pokeball.png";
import StoreContext from "../store/Context";
import { useHistory } from "react-router-dom";
import {Toast} from '../../utils/Toast';

function initialState() {
  return {
    user: "",
    password: "",
  };
}

function logar({ user, password }) {
  if (user === "admin" && password === "admin") {

    return { token: "1234" };
  }
  return { error: "usuario ou senha inválido" };
}

const Login = () => {
  const [values, setValues] = useState(initialState);
  const { setToken } = useContext(StoreContext);
  const history = useHistory();

  function onChange(event) {
    const { value, name } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  }

  function onSubmit(event) {
    event.preventDefault();

    const { token } = logar(values);

    if (token) {
      setToken(token);
      Toast.fire({
        icon: 'success',
        title: 'Logado com Sucesso'
      })
      return history.push("/home");
    }
    setValues(initialState);
    Toast.fire({
      icon: 'error',
      title: 'Usuario ou Senha Incorretos'
    })
  }

  return (
    <div className="login-form">
      <form onSubmit={onSubmit}>
        <div className="avatar">
          <img src={Avatar} alt="Avatar" />
        </div>
        <h2 className="text-center">Login</h2>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="user"
            placeholder="Usuário"
            required="required"
            onChange={onChange}
            value={values.user}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Senha"
            required="required"
            onChange={onChange}
            value={values.password}
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary btn-lg btn-block">
            Entrar
          </button>
        </div>
      </form>
      <p className="text-center small">
        Não possui conta? <a href="/">Cadastre-se</a>
      </p>
    </div>
  );
};

export default Login;
