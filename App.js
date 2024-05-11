const parent = React.createElement("div",{id:"parent"},
React.createElement("div",{id:"Child"},
React.createElement("h1",{id:"heading"},"i am the H1 tag")));

console. log(parent);

const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);