import React, { useState } from "react";
import axios from "axios";
import './Myprofile.css'


export const Myprofile = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

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
        <div className="myprofile">
            <h2>My Profile</h2>
            <div className="wrapper-myprofile">
                <div className="avatar-container">
                    <img className="avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNGZDlgqu5WAs9WAV_HS8wqpmneintd0grew&usqp=CAU" alt=""></img>
                    <button className="avatar-btn">CHANGE AVATAR</button>
                </div>
                <form className="" onSubmit={handleSubmit}>
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
                    <button type="submit" className="btn">SAVE</button>
                </form>
            </div>
        </div>
    )
}