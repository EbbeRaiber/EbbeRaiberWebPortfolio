import * as React from "react";
import '../style/styles.css';
import Objects from "../objects";


const StarsPage = () =>{
    return(
        <main>
            <button className="back-button" onClick={() => window.history.back()}>Go Back</button>
            <canvas id="bg"></canvas>
            <div>
                <Objects />
            </div>
        </main>


    )
}
export default StarsPage
