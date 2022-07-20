import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppointmentPage from './pages/AppointmentPage.js';
import ReviewPage from './pages/ReviewPage.js';
import ConsultingPage from './pages/ConsultingPage.js';
import MessagingPage from './pages/MessagingPage.js';
import Landing from './pages/Landing.js';
import InfoPaciente from "./pages/InfoPaciente.js"

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
          element={<ConsultingPage id_med='0001' />}
        />
        <Route
          path="/messaging"
          element={<MessagingPage id_med='0001' />}
        />
        <Route
          path="/"
          element={<Landing/>}
        />
        <Route
          path="/InfoPaciente"
          element={<InfoPaciente/>}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;