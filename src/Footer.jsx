import React, { useState } from "react";

export default function Footer() {
    const [show, setShow] = useState(() => {
        const savedStamp = localStorage.getItem("stamp");

        if (savedStamp) {
            return JSON.parse(savedStamp);
        }

        return {};
    });

    return (
        <div
            className="fx fs2 p2"
            style={{
                height: "4rem",
                justifyContent: "space-between",
                alignItems: "center",
                position: "sticky",
                width: "100%",
                bottom: "0px",
                backdropFilter: "blur(10px)",
                borderTop: "1px solid #ccc",
            }}
        >
            <button className="btn1 fs3 fyc">
                ☰
            </button>

            <div>
                {show.section || "No Section"}_
                {show.roll_number || "No Roll"}_
                {show.name || "No Name"}
            </div>

            <button className="btn1 fs3 fyc">
                ☰
            </button>
        </div>
    );
}