import React from "react";
import Layout from "../components/layout/Layout";
import { Link } from "gatsby";

export default function Index() {
    return (
        <Layout>
            <h1>My Landing Page </h1>
            <p>This is my landing page!</p>
            <Link to="/about">About</Link>
        </Layout>
    )
}