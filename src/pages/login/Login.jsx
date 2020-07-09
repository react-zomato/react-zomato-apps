import React, { useState } from "react";
import { connect } from "react-redux";
import { login } from "../../redux/actions";
import { useHistory } from "react-router-dom";
import HeaderLogin from "../../components/header/HeaderLogin.jsx";
import "./Login.css";

function Login(props) {
    const history = useHistory();

    const [form, setForm] = useState({ email: "", password: "" });
    const handleSubmit = (event) => {
        event.preventDefault();

        props.dispatch(login(form, history));
    };
    const inputHandler = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
    };

    return (
        <div>
            <HeaderLogin />
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit} className="container1">
                <div>
                    <input
                        onChange={inputHandler}
                        type="email"
                        name="email"
                        id="email"
                    />
                    <label htmlFor="email">Email</label>
                </div>
                <div>
                    <input
                        onChange={inputHandler}
                        type="password"
                        name="passWord"
                        id="passWord"
                    />
                    <label htmlFor="passWord">Password</label>
                </div>
                <div>
                    <button type="submit">Log In</button>
                </div>
            </form>
        </div>
    );
}

export default connect()(Login);
