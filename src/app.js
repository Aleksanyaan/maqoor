import "./app.css";
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/home';
import { Main } from "./pages/Main";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<Main />} />
        <Route path="/goals" element={<Main />} />
        <Route path="/teams" element={<Main />} />
        <Route path="/contact" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
