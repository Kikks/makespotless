import { Route, Routes } from 'react-router-dom';
import Redirect from '../components/containers/Redirect';
import LandingPage from '../screens/LandingPage';

const ApplicationNavigation = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="*" element={<Redirect to="/" />} />
    </Routes>
  );
};

export default ApplicationNavigation;
