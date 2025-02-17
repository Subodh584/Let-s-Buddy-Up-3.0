
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import LoginPage from './components/LoginPage/LoginPage';
import LandingPage from './components/LandingPage/LandingPage';
import About from './components/AboutPage/About_home';
import P2P from './components/P2P/P2P';
import AlumniNetwork from './components/AlumniNetwork/AlumniNetwork';
import LanguageExchange from './components/LanguageExchange/LanguageExchange';
import StudyGroup from './components/StudyGroup/StudyGroup';
import ContactUs from './components/ContactUs/ContactUs';
import PrivateComponent from './components/PrivateComponent';
import RegisterPage from './components/RegisterPage/RegisterPage';
import BuyOrSellPage from './components/Market/BuyOrSellPage';
import SellPage from './components/Market/SellPage';
import Products from './components/Market/MyProducts';
import BuyPage from './components/Market/BuyPage';
import CategoryBox from './components/Market/CategoryBox';
import SearchSeniorsForm from './components/JuniorForm/JuniorForm';
import ProductsForUser from './components/Market/ProductsForUser';
import RedirectedPage from './components/RedirectedPage';



function App() {
  return (
   <BrowserRouter>
    <Routes>

    <Route element={<PrivateComponent/>}>
      <Route path='/' element={<LandingPage/>} />
      <Route path='/about-home' element={<About/>}/>
      <Route path='/p2p' element={<P2P/>}/>
      <Route path='/market' element={<BuyOrSellPage/>}/>
      <Route path='/sell' element={<SellPage/>}/>
      <Route path='/buy' element={<BuyPage/>}/>
      <Route path="/category/:categoryId" element={<ProductsForUser />} />
      <Route path='/alumninetwork' element={<AlumniNetwork/>}/>
      <Route path='/languageexchange' element={<LanguageExchange/>}/>
      <Route path='/studygroups' element={<StudyGroup/>}/>
      <Route path='/contactus' element={<ContactUs/>}/>
    </Route>  
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='signup' element={<RegisterPage/>}/>
      <Route path='test' element={<SearchSeniorsForm/>}/>
      <Route path='/products' element={<Products/>}/>  
      <Route path='redirection' element={<RedirectedPage/>}/>



    </Routes>
   </BrowserRouter>
  );
}

export default App;
