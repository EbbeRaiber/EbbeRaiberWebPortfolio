import * as React from "react";
import '../style/styles.css';
import Objects from "../objects";

const IndexPage = () => {
  return (
    <main>
      <canvas id="bg"></canvas>
        <div className="header">
          <h1 className="header-name">EbbeRaiber</h1>
          <h3 className="header-port">Portfolio</h3>
        </div>
      <Objects />
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
