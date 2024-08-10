import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Development from './components/service/development.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/service/development" element={<Development/>} />
          {/* <Route path="/contact" element={<Contact />} />  */}
        </Routes>
      </Router>
    
  </React.StrictMode>,
)
