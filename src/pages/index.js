import * as React from "react";
import '../style/styles.css';
import { Link } from 'gatsby';

const IndexPage = () => {
  return (
    <main>
        <div className="header">
          <h1 className="header-name">EbbeRaiber</h1>
          <h3 className="header-port">Portfolio</h3>
          <Link to="/stars" className="header-port">Stars</Link>
        </div>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
