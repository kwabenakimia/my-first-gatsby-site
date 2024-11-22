import React from "react";
import { Link } from "gatsby";

export default function About() {
    return (
        <div>
            <h1>About me</h1>
            <p>This is my about page!</p>
            <Link to="/">Home</Link>
        </div>
    )
}