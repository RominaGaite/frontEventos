// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home'; // Asegúrate de que esta ruta es correcta

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Agrega otras rutas aquí */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
