import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Home';
import AboutUsPage from './AboutUs'
import CareersPage from './Careers';
import ContactUsPage from './ContactUs';
import ServicesPage from './Services';
import HomePageBanner from './Components/HomePageBanner';
import ResponsiveDialog from './Components/ResponsiveDialog';
import CareerForm from './Components/CareerForm';

function App() {
    
    return(
      <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about-us" element={<AboutUsPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/contact-us" element={<ContactUsPage />} />
                <Route path="/careers" element={<CareersPage />} />
                <Route path="/video" element={<HomePageBanner />} />
                <Route path="/dialog" element={<ResponsiveDialog />} />
                <Route path="/career-form" element={<CareerForm />} />
            </Routes>
        </Router>
    );
}

export default App;
