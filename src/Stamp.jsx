import React, { useEffect, useState } from "react";
export function Stamp() {
    const[msg, setMsg] = useState("");
    const stamp = { section:"g5", roll_number:"1001", name:"Name"};
    function handleClick() {
        localStorage.setItem("stamp", JSON.stringify(stamp));
        setMsg("updated");
    }
    return (
        <div className ="box2 mt2">
            <h3>we have got stamp data</h3>
            <br/>
            {msg === "" && <button onClick={handleClick}>click here</button>}
            {msg === "updated" && <p className="bg1 p1">Stamp created </p>}
        </div>
    );
}