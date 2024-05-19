import Marquee from './components/Marquee';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import About from './components/About';
import Eyes from './components/Eyes';
import Featured from './components/Featured';
import Achievements from './components/Achievements';
import Start from './components/Start';
import Footer from './components/Footer'

import LocomotiveScroll from 'locomotive-scroll';

function App() {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div data-scroll-container className='relative z-0 bg-zinc-900 text-slate-100'>
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <img data-scroll data-scroll-speed='-0.25' className='relative z-[-1] w-full' src="https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg" alt="" />
      <Eyes />
      <Featured />
      <Achievements />
      <Start />
      <Eyes />
      <Footer />
    </div>
  )
}

export default App;