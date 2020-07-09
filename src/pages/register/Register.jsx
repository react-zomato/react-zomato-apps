import React, { useState } from "react";
import { registerUser } from "../../redux/actions";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import HeaderLogin from "../../components/header/HeaderLogin.jsx";

function Signup(props) {
    const history = useHistory();
    const [form, setForm] = useState({
        fullname: "",
        address: "",
        email: "",
        password: "",
    });
    const submitHandler = (event) => {
        event.preventDefault();
        props.dispatch(registerUser(form, history));
    };

    const eventHandler = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
    };

    return (
        <div>
            <HeaderLogin />
            <h1>Sign Up</h1>
            <form className="container1" onSubmit={submitHandler}>
                <div>
                    <input
                        onChange={eventHandler}
                        type="text"
                        value={form.fullName}
                        name="fullName"
                        id="fullName"
                    />
                    <label htmlFor="fullName">Full Name</label>
                </div>
                <div>
                    <input
                        onChange={eventHandler}
                        type="email"
                        value={form.email}
                        name="email"
                        id="email"
                    />
                    <label htmlFor="email">Email</label>
                </div>
                <div>
                    <input
                        onChange={eventHandler}
                        type="password"
                        value={form.passWord}
                        name="passWord"
                        id="passWord"
                    />
                    <label htmlFor="passWord">Password</label>
                </div>
                <div>
                    <button type="submit">Register</button>
                </div>
            </form>
        </div>
    );
}

export default connect(null, null)(Signup);
