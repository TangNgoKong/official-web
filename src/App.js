import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './containers/Home/Home';
import { GlobalProvider } from './globalContext';

function App() {
  return (
    <GlobalProvider>
      <Router basename="/official-web">
        <Navbar />
        <Routes>
          <Route element={<Home />} path="/" />
        </Routes>
      </Router>
    </GlobalProvider>
  );
}

export default App;
