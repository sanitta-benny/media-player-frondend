
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import LandingPage from './Pages/LandingPage';
import WatchHistorty from './Pages/WatchHistorty';
import Header from './Pages/Comonents/Header';
import Footer from './Pages/Comonents/Footer';

function App() {
  return (
    <div>
     <Header/>
      <Routes>
        <Route path={'/'} element={ <LandingPage/>}/>
        <Route path={'/home'} element={ <Home/>}/>
        <Route path={'/watch-history'} element={ <WatchHistorty/>}/>
        </Routes>
        <Footer/>
   
      
    </div>
  );
}

export default App;
