import { useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Intro from './pages/Intro';

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
    </main>

   </div>
  )
}

export default App
