import React from "react"
import ReactDOM from "react-dom"
import { HashRouter } from "react-router-dom";
import User from "./components/user"

const rootComponet = document.getElementById("root")

ReactDOM.render(
    <HashRouter basename={process.env.PUBLIC_URL}>
        <div>
            <User/>
        </div>
    </HashRouter>
, rootComponet)

