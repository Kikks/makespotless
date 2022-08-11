import Footer from '../../components/footer/Footer';
import About from '../../components/landingPage/About';
import Contact from '../../components/landingPage/Contact';
import Header from '../../components/landingPage/Header';
import MissionAndVision from '../../components/landingPage/MissionAndVision';
import Services from '../../components/landingPage/Services';
import Spaces from '../../components/landingPage/Spaces';
import Navbar from '../../components/navbar/Navbar';

const LandingPage = () => {
  return (
    <main className="relative w-full overflow-x-hidden">
      <Navbar />
      <Header />
      <About />
      <div className="swipe swipe-1" />
      <MissionAndVision />
      <div className="swipe swipe-2" />
      <Services />
      <div className="swipe swipe-1" />
      <Spaces />
      <Contact />
      <Footer />
    </main>
  );
};

export default LandingPage;
