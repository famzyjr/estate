import './index.css';
import  './App.css';
import Header from './components/header/Header'
import Hero from './components/hero/Hero';
import Companies from './components/companies/Companies';
import Residence from './components/Re/Residence';
import Value from './components/values/Value';
import  Contact from  './components/contact/Contact'
import GetStarted from './components/getstarted/GetStarted';
import Footer from './components/footer/Footer';
function App() {
  return (
    <div className="App">
     
     <div >
      <div className='white-gradient'  />
       <Header />
      <Hero />
     </div> 
       <Companies />
       <Residence/>
       <Value/>
       <Contact/>
       <GetStarted/>
       <Footer/>
    </div>
  );
}

export default App;
