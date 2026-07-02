import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {

    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    return (

        <nav className="navbar">

            <div className="logo">
                CP Coach
            </div>

            <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>

                <li><a href="#platform">Platform</a></li>

                <li><a href="#how-it-works">How It Works</a></li>

                <li><a href="#footer">Contact</a></li>

                <li>FAQ</li>

            </ul>

            <div className="nav-actions">

                <button className="signin-btn">
                    Sign In
                </button>

                <button
                    className="start-btn"
                    onClick={() => navigate("/dashboard")}
                >
                    Get Started
                </button>

            </div>

            <div
                className="menu-toggle"
                onClick={() => setMenuOpen(!menuOpen)}
            >

                {menuOpen ? <FaTimes /> : <FaBars />}

            </div>

        </nav>

    );

}

export default Navbar;