import { useEffect, useState } from "react";
import { BsTrash3 } from "react-icons/bs";

export function StoreApp() {
    const [id, setId] = useState("");
    const [category, setCategory] = useState("");
    const [brand, setBrand] = useState("");
    const [price, setPrice] = useState("");

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const data = localStorage.getItem(
            "products"
        );

        if (data) {
            setProducts(JSON.parse(data));
        }
    }, []);

    const handleAdd = (e) => {
        e.preventDefault();

        const newProduct = {
            id: id.trim(),
            category: category.trim(),
            brand: brand.trim(),
            price: price.trim(),
        };

        const updatedProducts = [
            ...products,
            newProduct,
        ];

        setProducts(updatedProducts);

        localStorage.setItem(
            "products",
            JSON.stringify(updatedProducts)
        );

        setId("");
        setCategory("");
        setBrand("");
        setPrice("");
    };

    const handleDelete = (del_id) => {
        const updatedProducts =
            products.filter(
                (product) =>
                    product.id !== del_id
            );

        setProducts(updatedProducts);

        localStorage.setItem(
            "products",
            JSON.stringify(updatedProducts)
        );
    };

    return (
        <section className="store-page">
            <section className="store-box add-product-box">
                <h2>Add Product</h2>

                <form
                    onSubmit={handleAdd}
                    className="store-form"
                >
                    <input
                        type="text"
                        placeholder="ID"
                        value={id}
                        onChange={(e) =>
                            setId(
                                e.target.value
                            )
                        }
                        required
                    />

                    <input
                        type="text"
                        placeholder="Category"
                        value={category}
                        onChange={(e) =>
                            setCategory(
                                e.target.value
                            )
                        }
                        required
                    />

                    <input
                        type="text"
                        placeholder="Brand"
                        value={brand}
                        onChange={(e) =>
                            setBrand(
                                e.target.value
                            )
                        }
                        required
                    />

                    <input
                        type="number"
                        placeholder="Price"
                        value={price}
                        onChange={(e) =>
                            setPrice(
                                e.target.value
                            )
                        }
                        required
                    />

                    <button
                        type="submit"
                        className="add-btn"
                    >
                        Add
                    </button>
                </form>
            </section>

            <section className="store-box list-product-box">
                <h2>
                    List of Products (
                    {products.length})
                </h2>

                <ul className="product-list">
                    {products.map(
                        (product) => (
                            <li
                                key={product.id}
                                className="product-list-item"
                            >
                                <button
                                    className="delete-btn"
                                    onClick={() =>
                                        handleDelete(
                                            product.id
                                        )
                                    }
                                >
                                    <BsTrash3 />
                                </button>

                                <span>
                                    {product.id}{" "}
                                    {
                                        product.category
                                    }{" "}
                                    {
                                        product.brand
                                    }{" "}
                                    {
                                        product.price
                                    }
                                    /-
                                </span>
                            </li>
                        )
                    )}
                </ul>
            </section>
        </section>
    );
}