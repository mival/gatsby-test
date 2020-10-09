import Layout from "../components/layout"
import LikeButton from "../components/LikeButton"
import { Link } from "gatsby"
import React from "react"

export default function Home() {
  return (
    <div>
      <Layout>
        <h1>Hello world!</h1>
        <LikeButton />
        <Link to="/about">About</Link>
      </Layout>
    </div>
  )
}
