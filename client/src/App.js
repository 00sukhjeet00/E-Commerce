import { BrowserRouter,Link,Route } from 'react-router-dom'
import './App.css';
import Footer from './Component/Footer'
import HomeScreen from './Screen/HomeScreen';
import CartScreen from './Screen/CartScreen';
import Dashboard from './Screen/Dashboard';
import Product from './Screen/Product';
import LoginScreen from './Screen/LoginScreen';
import RegisterScreen from './Screen/RegisterScreen';
import AuthScreen from './Screen/AuthScreen';
import UploadScreen from './Screen/UploadScreen'
function App() {
  const token = localStorage.getItem('token')
  return (
    <BrowserRouter>
      <nav className="navbar navbar-dark bg-dark fixed-top">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">E-com</Link>
                <form className="d-flex">
                    <Link className="nav-link" href="/cart" style={{ "color": "white" }} to="/cart">Cart</Link>
                    {
                        token ? (
                            <Link className="nav-link " href="#" style={{ "color": "white" }} to="/dashboard">dashboard</Link>) :
                    (<Link className="nav-link" href="#" style={{ "color": "white" }} to="/login">Login</Link>)
                    }
                </form>
            </div>
        </nav>
      <div className="main-container">
        <Route component={HomeScreen} exact path='/' />
        <Route component={CartScreen} path='/cart' />
        <Route component={Product} path="/product/:id" />
        <Route component={LoginScreen} path="/login" />
        <Route component={RegisterScreen} path="/register"/>
        <Route component={AuthScreen(Dashboard)} path="/dashboard" />
        <Route component={UploadScreen} path="/upload"/>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
