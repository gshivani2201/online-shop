import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ProductListing from './components/ProductListing'
import ProductDetails from './components/ProductDetails'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<ProductListing/>} />
          <Route path="/product/:productId" exact element={<ProductDetails/>} />
          <Route>404 not found</Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
