

import { BrowserRouter as Router,Routes ,Route} from 'react-router-dom';
import Header from './components/Header';
import './styles/App.css'
import './styles/header.css'
import Home from './components/Home';
import './styles/home.css'




function App() {
  return (
    
   <>
   <Header />
   <main className='main'>
    <Home />
   </main>
  </>
  );
}

export default App;
