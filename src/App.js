import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import OrderScreen from './screens/OrderScreen';
import ReceiptScreen from './screens/ReceiptScreen';
import {Routes, Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route index element = {<HomeScreen/>} />
        <Route path ="/cart" element = {<CartScreen/>} />
        <Route path ="/order/:favorite" element = {<OrderScreen/>} />
        <Route path ="/order" element = {<OrderScreen/>} />
        <Route path ="/thankyou" element = {<ReceiptScreen/>}/>
      </Routes>
     
     </div>
  );
}

export default App;
