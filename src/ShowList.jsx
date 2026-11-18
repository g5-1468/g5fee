import React from "react";

function ShowList(props) {

    const [products, setProducts] = React.useState([]);

    React.useEffect(() => {

        let data = localStorage.getItem("products");

        if (data) {

            data = JSON.parse(data);

            if (props.brand) {
                data = data.filter((item) => item.brand === props.brand);
            }

            setProducts(data);
        }

    }, [props.brand]);

    return (

        <section className="fyc">

            <div className="h1" style={{ padding: "1rem" }}>

                <h3>List of Products: {props.brand}</h3>

                <div
                    className="bg1"
                    style={{
                        display: "flex",
                        padding: "10px",
                        gap: "30px",
                        marginBottom: "5px"
                    }}
                >

                    <span style={{ width: "50px" }}>ID</span>

                    <span style={{ width: "100px" }}>Brand</span>

                    <span style={{ width: "100px" }}>Price (Rs.)</span>

                </div>

                {products.map((item) => (

                    <div
                        key={item.id}
                        style={{
                            display: "flex",
                            padding: "10px",
                            gap: "30px"
                        }}
                    >

                        <span style={{ width: "50px" }}>
                            {item.id}
                        </span>

                        <span style={{ width: "100px" }}>
                            {item.brand}
                        </span>

                        <span style={{ width: "100px" }}>
                            {item.price}
                        </span>

                    </div>

                ))}             

            </div>

        </section>
    );
}

export default ShowList;