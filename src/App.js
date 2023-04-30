
import './App.css';
import Navbar from  './components/Navbar'
import Headpart from './components/Headpart';
import Threedetails from './components/ThreeDetails';
import Steps from './components/Steps';
import Card from './components/Card';
import Footer from './components/footer'
import Abovefooter from './components/abovefooter';
import  Carousel  from './components/carousel';


function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Navbar/>
      <Headpart/>
      <Threedetails/>
      <Steps/>
      <Card/>
      <Carousel/>
      <Abovefooter/>
      <Footer/>
      </header>
    </div>
  );
}

export default App;
