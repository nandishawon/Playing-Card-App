import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import PlayingCardsComponent from './components/PlayingCards';
import Page1Component from './components/Page1/page1';
import Card1Component from './components/Card1/card_1';
import Card2Component from './components/Card2/card_2';
import Card3Component from './components/Card3/card_3';
import Card4Component from './components/Card4/card_4';
import Card5Component from './components/Card5/card_5';
import Card6Component from './components/Card6/card_6';
import Card7Component from './components/Card7/card_7';
import Card8Component from './components/Card8/card_8';
import Card9Component from './components/Card9/card_9';
import Card10Component from './components/Card10/card_10';
import Page12Component from './components/Page12/page12';
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Header />
      <AnimatePresence mode='wait'>
        <Routes key={location.pathname} location={location} >
          <Route path="/" element={<Page1Component />} />
          <Route element={<PlayingCardsComponent />}>
            <Route path="/card_1" element={<Card1Component />} />
            <Route path="/card_2" element={<Card2Component />} />
            <Route path="/card_3" element={<Card3Component />} />
            <Route path="/card_4" element={<Card4Component />} />
            <Route path="/card_5" element={<Card5Component />} />
            <Route path="/card_6" element={<Card6Component />} />
            <Route path="/card_7" element={<Card7Component />} />
            <Route path="/card_8" element={<Card8Component />} />
            <Route path="/card_9" element={<Card9Component />} />
            <Route path="/card_10" element={<Card10Component />} />
          </Route>
          <Route path="/page12" element={<Page12Component />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div >
  );
}

export default App;
