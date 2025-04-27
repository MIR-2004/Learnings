"use client"

import axios from "axios";
import { useState } from "react";

export default function(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    return <div className=" h-screen flex flex-col items-center justify-center">
        <input onChange={(e) => {
            setUsername(e.target.value);
        }} className="border border-gray-700" type="text" placeholder="username" />
        <input onChange={(e) => {
            setPassword(e.target.value);
        }} className=" border border-gray-700" type="text" placeholder="password" />
        <button onClick={() => {
            axios.post("http://localhost:3000/api/user", {
                username,
                password
            })
        }} className="bg-amber-400 border border-black rounded">SignUp</button>
    </div>
}