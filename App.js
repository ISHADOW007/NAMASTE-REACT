import React from "react";
import ReactDOM from "react-dom";

const parent = React.createElement("div",{id:"parent"},
React.createElement("div",{id:"Child"},
React.createElement("h1",{id:"heading"},"i am the H1 tag")));



const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);