import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppointmentPage from './pages/AppointmentPage.js';
import ReviewPage from './pages/ReviewPage.js';
import ConsultingPage from './pages/ConsultingPage.js';
import MessagingPage from './pages/MessagingPage.js';
import MedicalSearchPage from './pages/MedicalSearchPage.js';

//import ExamplePage from './ExamplePage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/appointments"
          element={<AppointmentPage id_med='0001' />}
        />
        <Route
          path="/reviews"
          element={<ReviewPage id_med='0001' />}
        />
        <Route
          path="/consulting"
          element={<ConsultingPage id_cit='0007' id_med='0001' id_pac='0001' />}
        />
        <Route
          path="/messaging"
          element={<MessagingPage id_med='0001' />}
        />
        <Route 
          path="/MedicalSearch"
          element={<MedicalSearchPage id_bus='1001' />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;