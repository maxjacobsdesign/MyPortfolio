// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from './components';

import ProjectDetails from './components/ProjectDetails';

const MainContent = () => (
  <div className="relative z-0 bg-primary">
    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
      <Navbar />
      <Hero />
    </div>
    <About />
    <Experience />
    <Tech />
    <Works />
    <Feedbacks />
    <div className="relative z-0">
      <Contact />
      <div className="absolute inset-0 z-[-1]">
        <StarsCanvas />
      </div>
    </div>
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/project/:projectName" element={<ProjectDetails />} />
        <Route
          path="*"
          element={
            <div className="text-white p-10 text-center text-3xl">404 - Page not found</div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;