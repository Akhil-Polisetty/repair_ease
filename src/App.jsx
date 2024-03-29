import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import RaiseIssue from "./components/RaiseIssue";
import Home from "./components/Home";
import PredictPrize from "./components/PredictPrize";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Home />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/raise" element={<RaiseIssue />}></Route>
          <Route path="/predict" element={<PredictPrize />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
