import React from 'react';
import {
    BrowserRouter,
    Routes, // instead of "Switch"
    Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import SemesterFee from './components/SemesterFee.jsx'; // Import the About Us component
import './App.css';
import Footer from './components/Footer.jsx';
import AdmissionTests from './components/AdmissionTests.jsx';
import ProfessionalExam from './components/ProfessionalExam.jsx';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/semester-fee" element={<SemesterFee />} />
                <Route path="/admission-tests" element={<AdmissionTests />} />
                <Route path="/professional-exams" element={<ProfessionalExam />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
