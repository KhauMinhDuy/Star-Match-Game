import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import StarMatch from "./components/StarMatch";

const colors = {
    available: 'lightgray',
    used: 'lightgreen',
    wrong: 'lightcoral',
    candidate: 'deepskyblue'
};

function App() {
    return (
        <div className="container">
            <StarMatch />
        </div>
    );
}

export default App;
