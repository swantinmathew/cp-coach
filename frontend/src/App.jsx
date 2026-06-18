import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import Compare from "./pages/Compare";


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

            </Routes>

        </BrowserRouter>

    );

}

export default App;