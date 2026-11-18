import { useEffect, useState } from "react";

export function Product() {
    const [products, setProducts] =
        useState([]);

    const [selectedCategory, setSelectedCategory] =
        useState("All");

    useEffect(() => {
        const loadProducts = () => {
            const data =
                localStorage.getItem(
                    "products"
                );

            if (data) {
                setProducts(
                    JSON.parse(data)
                );
            } else {
                setProducts([]);
            }
        };

        loadProducts();

        window.addEventListener(
            "storage",
            loadProducts
        );

        const timer = setInterval(
            loadProducts,
            500
        );

        return () => {
            window.removeEventListener(
                "storage",
                loadProducts
            );

            clearInterval(timer);
        };
    }, []);

    const categories = [
        ...new Set(
            products
                .map(
                    (product) =>
                        product.category
                )
                .filter(
                    (category) =>
                        category !== ""
                )
        ),
    ];

    const filteredProducts =
        selectedCategory === "All"
            ? products
            : products.filter(
                  (product) =>
                      product.category ===
                      selectedCategory
              );

    return (
        <div className="products-page">
            <aside className="categories">
                <h2>Categories</h2>

                <button
                    className={
                        selectedCategory ===
                        "All"
                            ? "category-active"
                            : ""
                    }
                    onClick={() =>
                        setSelectedCategory(
                            "All"
                        )
                    }
                >
                    All
                </button>

                {categories.map(
                    (category) => (
                        <button
                            key={category}
                            className={
                                selectedCategory ===
                                category
                                    ? "category-active"
                                    : ""
                            }
                            onClick={() =>
                                setSelectedCategory(
                                    category
                                )
                            }
                        >
                            {category}
                        </button>
                    )
                )}
            </aside>

            <main className="products-content">
                <h2>
                    Product Category:{" "}
                    {selectedCategory}
                </h2>

                <div className="products-grid">
                    {filteredProducts.map(
                        (product) => (
                            <div
                                key={product.id}
                                className="product-card"
                            >
                                <div className="product-image">
                                    Image
                                </div>

                                <div className="product-info">
                                    <p>
                                        id:{" "}
                                        {
                                            product.id
                                        }
                                    </p>

                                    <p>
                                        {
                                            product.brand
                                        }
                                    </p>

                                    <p>
                                        Price:{" "}
                                        {
                                            product.price
                                        }
                                        /-
                                    </p>

                                    <button>
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        )
                    )}
                </div>

                {filteredProducts.length ===
                    0 && (
                    <p className="no-products">
                        No products found.
                    </p>
                )}
            </main>
        </div>
    );
}