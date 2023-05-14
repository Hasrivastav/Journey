


import Header from './components/Header';
import './styles/App.css'
import './styles/header.css'
import Home from './components/Home';
import './styles/home.css'
import About from './components/About';
import Timeline from './components/timiline';

import Footer from './components/footer';





function App() {
  return (
    
   <>
   <Header />
   <main className='main'>

    <Home />
     <About />
    <Timeline />
    <Footer />
   </main>
  </>
  );
}

export default App;
