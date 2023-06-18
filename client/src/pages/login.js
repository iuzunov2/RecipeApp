import React, { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import "./login.css"

export const Login = () => {
    const [_, setCookies] = useCookies(["access_token"]);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const result = await axios.post("http://localhost:3001/auth/login", {
                username,
                password,
            });

            setCookies("access_token", result.data.token);
            window.localStorage.setItem("userID", result.data.userID);
            navigate("/");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="login">
            <h2>Log In</h2>
            <div className="wrapper">
                <div className="left">
                    <h1>Welcome to <span className="babys">Baby's</span></h1>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text.
                        It has roots in a piece of classical Latin literature from 45 BC,making it over 2000 years old.
                        Richard McClintock,a Latin professor at Hampden-Sydney College in Virginia,
                        looked up one of the more obscure Latin words,consectetur.Various versions have evolved over the years,
                        sometimes by accident, sometimes on purpose</p>
                </div>
                <form onSubmit={handleSubmit} className="right">
                    <div className="form-group">
                        <label htmlFor="username" className="labels">Username</label>
                        <br></br>
                        <input
                            placeholder="user2245"
                            className="input-fields"
                            type="text"
                            id="username"
                            value={username}
                            onChange={(event) => setUsername(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="labels">Password</label>
                        <br></br>
                        <input
                            placeholder="password"
                            className="input-fields"
                            type="password"
                            id="password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn">LOG IN</button>
                </form>
            </div>
        </div>
    );
};
