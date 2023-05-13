

import { BrowserRouter as Router,Routes ,Route} from 'react-router-dom';
import Header from './components/Header';
import './styles/App.css'
import './styles/header.css'
import Home from './components/Home';
import './styles/home.css'
import About from './components/About';




function App() {
  return (
    
   <>
   <Header />
   <main className='main'>

    <Home />
    <About />
   </main>
  </>
  );
}

export default App;
