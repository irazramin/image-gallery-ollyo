import './App.css';
import HomePage from "./pages/home/home-page";
import {useEffect} from "react";
import data from "./data/imageData";

function App() {
    return (
        <div className="bg-blue-50 bg-opacity-60 min-h-screen p-[20px]">
            <HomePage/>
        </div>
    );
}

export default App;
