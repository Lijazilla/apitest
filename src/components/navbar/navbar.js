import { useState } from "react";

function Navbar({ brand }) {
    return (
        <nav className="navbar navbar-dark bg-primary">
            <div className="container">
                <a className="navbar-brand text-uppercase" href="https://lijazilla.github.io/apitest/build/">
                    {brand}
                </a>
            </div>
        </nav>
    );
}

export default Navbar;
