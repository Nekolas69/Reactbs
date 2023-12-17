import './App.css';
import Seznam from './Seznam';
import Homepage from './Homepage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/seznam" element={<Seznam />} />
      </Routes>
    </Router>
  );
}
