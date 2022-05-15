import React, { useState } from "react";
import { Link } from "react-router-dom";


export default function Login(){
    const handleAdmin = ()=>{
        window.location.href = "/"
      }
    return(
        <div>
            Hello login
            <button type="button" onClick={handleAdmin}>link</button>
        </div>
    )
}