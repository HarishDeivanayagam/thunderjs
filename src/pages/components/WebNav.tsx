import React from "react";
import { Link } from "../../core/router";

export function WebNav() {
    return (
        <ul>
            <li><Link name="Home" to="/"/></li>
            <li><Link name="Pricing" to="/pricing"/></li>
            <li><Link name="About" to="/about"/></li>
            <button>Login</button>
        </ul>
    )
}
