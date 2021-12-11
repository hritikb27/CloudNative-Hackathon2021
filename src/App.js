import SignUp from "./components/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import ChatUI from "./components/ChatUI";

function App() {
	return (
		<div className="App">
      <BrowserRouter> 
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/chat" element={<ChatUI />} />
        </Routes>
      </BrowserRouter>
		</div>
	);
}

export default App;
