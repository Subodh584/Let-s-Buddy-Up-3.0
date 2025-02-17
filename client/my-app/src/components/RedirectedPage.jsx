import React, { useEffect } from "react";
export default function RedirectedPage(){
useEffect(()=>{
    window.location.href = 'http://localhost:1000';
});
}
