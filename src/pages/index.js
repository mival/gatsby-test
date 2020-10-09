import Layout from '../components/layout';
import LikeButton from '../components/LikeButton';
import { Link } from 'gatsby';
import React from "react"

export default function Home() {
  return <div><Layout>Hello world!<LikeButton/><Link to='/about'>About</Link></Layout></div>
}
