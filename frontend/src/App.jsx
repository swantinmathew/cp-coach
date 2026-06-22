import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import Compare from "./pages/Compare";
import DSARoadmap from "./pages/DSARoadmap";


function App() {

    return (

        <BrowserRouter>

            <Routes>

                <Route
                    path="/"
                    element={<LandingPage />}
                />

                <Route
                    path="/dashboard"
                    element={<Dashboard />}
                />
                <Route
                    path="/compare"
                    element={<Compare />}
                />  
                <Route
                    path="/roadmaps/dsa"
                    element={<DSARoadmap />}
                />

            </Routes>

        </BrowserRouter>

    );

}

export default App;