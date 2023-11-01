import './App.css';
import HomePage from "./pages/home/home-page";
import {useEffect} from "react";
import data from "./data/imageData";
import TopbarComponent from "./components/layouts/Topbar.component";

function App() {
    return (
        <div className="bg-blue-50 bg-opacity-50 min-h-screen">
            <TopbarComponent />
            <div className="p-5 mt-5">
                <HomePage/>
            </div>
        </div>
    );
}

export default App;
