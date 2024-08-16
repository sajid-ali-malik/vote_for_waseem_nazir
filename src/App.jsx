import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import PollingStationScreen from "./components/PollingStationScreen";
import BallotPaperScreen from "./components/BallotPaperScreen";
import ContactPage from "./components/ContactPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/polling-station" element={<PollingStationScreen />} />
        <Route path="/ballot-paper" element={<BallotPaperScreen />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
