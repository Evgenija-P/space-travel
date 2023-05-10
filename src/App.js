import Header from './components/Header';
import About from './components/About';
import Process from './components/Process';
import Reserve from './components/Offers/Reserve';
import Offers from './components/Offers';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import Navigate from './components/NavigateButtons';

const App = () => {
  return (
    <div className="font-basic text-prime-color bg-[#020017]">
      <Navigate />
      <Header />
      <About />
      <Process />
      <Reserve />
      <Offers />
      <Contacts />
      <Footer />
    </div>
  );
};

export default App;
