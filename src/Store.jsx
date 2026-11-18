import React from 'react'

function Store() {

    const [msg, setMsg] = React.useState("");

    const products = [
        { id: 1, name: "Jeans", brand: "Levis", price: 2000 },
        { id: 2, name: "Jeans", brand: "Levis", price: 2500 },
        { id: 3, name: "Jeans", brand: "Pepe", price: 2100 },
        { id: 4, name: "Jeans", brand: "Pepe", price: 2700 },
        { id: 5, name: "Jeans", brand: "Wrangler", price: 2200 },
    ];

    function handleClick() {

        localStorage.setItem("products", JSON.stringify(products));

        setMsg("updated");
    }

    return (
        <div className="box1">

            <h3>We have got data of products</h3>

            <br />

            {msg === "" && (
                <button onClick={handleClick}>
                    Update Inventory
                </button>
            )}

            {msg === "updated" && (
                <p className="bg1 p1">
                    Inventory updated
                </p>
            )}

        </div>
    );
}

export default Store;