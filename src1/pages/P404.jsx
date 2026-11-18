import { useNavigate } from "react-router-dom";

export function P404() {
    const navigate = useNavigate();

    return (
        <section className="page404">
            <h1>404</h1>

            <h3>
                We don't have the page
                requested by you.
            </h3>

            <button
                onClick={() =>
                    navigate("/")
                }
            >
                Go to Home
            </button>
        </section>
    );
}