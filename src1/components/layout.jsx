import { Link } from "react-router-dom";
import { IoMdLogOut } from "react-icons/io";

export function Layout() {
    return (
        <nav className="navbar">
            <span className="logo">
                ♔
            </span>

            <div className="nav-links">
                <Link to="/">
                    Home
                </Link>

                <Link to="/about">
                    About
                </Link>

                <Link to="/products">
                    Products
                </Link>

                <Link to="/inventory">
                    Inventory
                </Link>
            </div>

            <button
                className="logout-button"
                onClick={() => {
                    window.location.href = "/";
                }}
            >
                <IoMdLogOut />
            </button>
        </nav>
    );
}