import React, { useState } from "react";
import axios from "axios";
// import { useCookies } from "react-cookie";
// import { useNavigate } from "react-router-dom";
import "./register.css"

export const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    // const [_, setCookies] = useCookies(["access_token"]);
    // const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post("http://localhost:3001/auth/register", {
                username,
                password,
                email
            });
            alert("Registration Completed! Now login.");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="register">
            <h2>Create Account</h2>
            <div className="wrapper">
                <div className="left">
                    <h1>Create Your <span className="babys">Account</span></h1>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text.
                        It has roots in a piece of classical Latin literature from 45 BC,making it over 2000 years old.
                        Richard McClintock,a Latin professor at Hampden-Sydney College in Virginia,
                        looked up one of the more obscure Latin words,consectetur.Various versions have evolved over the years,
                        sometimes by accident, sometimes on purpose</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="labels" htmlFor="email">Email</label>
                        <br></br>
                        <input
                            placeholder=""
                            className="input-fields"
                            type="email"
                            id="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label className="labels" htmlFor="username">Username</label>
                        <br></br>
                        <input
                            placeholder="icko"
                            className="input-fields"
                            type="text"
                            id="username"
                            value={username}
                            onChange={(event) => setUsername(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label className="labels" htmlFor="password">Password</label>
                        <br></br>
                        <input
                            placeholder="*******"
                            className="input-fields"
                            type="password"
                            id="password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn">REGISTER</button>
                </form>
            </div>
        </div>
    );
};