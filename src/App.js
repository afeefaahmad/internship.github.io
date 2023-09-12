
import './App.css';
import  Header from "./components/layout/Header";
import Home from './components/Home';
import Footer from './components/layout/Footer';


function App() {
  return (
    <div className="App">
      
      <Header/>
      <div className='container container-fluid'>
      <Home/>
      </div>
      <Footer/>
      
    </div>
  );
};

export default App;
