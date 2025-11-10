import { useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Intro from './pages/Intro';
import WhatIsExot from './pages/WhatIsExot';
import Subscribe from './pages/Subscribe';
import Ecosystem from './pages/Ecosystem';
import LatestUpdates from './pages/LatestUpdates';
import Teams from './pages/Teams';
import Roadmap from './pages/Roadmap';
import Token from './pages/Token';
import Exosome from './pages/Exosome';
import Community from './pages/Community';
import Footer from './components/Footer';

function App() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
   <div className='w-full'>
    <Header />
    <main>
      <section id="intro">
        <Intro />
      </section>
      <section id="what-is-exot">
        <WhatIsExot />
      </section>
      <Subscribe />
      <section id="ecosystem">
        <Ecosystem />
      </section>
      <section id="exosome">
        <Exosome />
      </section>
      <section id="latest-updates">
        <LatestUpdates />
      </section>
      <section id="token">
        <Token />
      </section>
      <section id="team">
        <Teams />
      </section>
      <section id="roadmap">
        <Roadmap />
      </section>
      <Community />
    </main>
    <Footer />
   </div>
  )
}

export default App
