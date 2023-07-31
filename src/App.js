import { Component } from 'react';
import { connect } from 'react-redux';
import * as productActions from './store/actions/productsActions';
import * as categoryActions from './store/actions/categoryActions';
import * as authenticationActions from './store/actions/authenticationActions';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Products from './components/Products/Products';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Cart from './components/Cart/Cart';
import Orders from './components/Orders/Orders';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Authentication from './components/Authentication/Authentication';
import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.getProducts();
    this.props.getCategories();
    this.props.getSubcategories();
    this.props.getLoginStatus();
  }

  checkEmptyObj = (obj) => {
    return Object.keys(obj).length === 0;
  }

  render() {
    return (
      <Router>
        <div className="header">
          <Navbar />
        </div>
        <div className="content">
          <Switch>
            <Route exact path="/" component={Products} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/product/:id" component={ProductDetails} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/orders" component={Orders} />
            <Route component={Authentication} />
          </Switch>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </Router>
    );
  }
}

const mapActionToProps = (dispatch) => {
  return {
    getProducts: () => { dispatch(productActions.getProducts()) },
    getCategories: () => { dispatch(categoryActions.getCategories()) },
    getSubcategories: () => { dispatch(categoryActions.getSubcategories()) },
    getLoginStatus: () => { dispatch(authenticationActions.getLoginStatus()) }
  }
}

export default connect(null, mapActionToProps)(App);
