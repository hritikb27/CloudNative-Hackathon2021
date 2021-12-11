import SignUp from "./components/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";

function App() {
	return (
		<div className="App">
      <BrowserRouter> 
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
		</div>
	);
}

export default App;
