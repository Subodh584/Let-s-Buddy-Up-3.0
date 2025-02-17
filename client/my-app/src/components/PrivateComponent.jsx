import React from "react";
import { Navigate, Outlet } from "react-router-dom";


export default function PrivateComponent(){
    const auth = localStorage.getItem("UserName");
    return auth?<Outlet/>:<Navigate to="/login"/>
}