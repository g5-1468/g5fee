import { useContext } from "react";
import { DarkModeContext } from "../App";

export function Child_Gen2() {
    const DarkMode = useContext(DarkModeContext);
    return (
        <div className="b1 fyc bg52 p3">
            <h3>Level-C : Child of Level-B</h3>
            <h2 style={{ color : "yellow" }}>Dark Mode : {DarkMode ? "ON" : "OFF"}</h2>
            <h4>Shown Value of Dark Mode using Context created at Level-A</h4>
        </div>
    )
}