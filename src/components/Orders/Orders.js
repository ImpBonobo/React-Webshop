import React, { Component } from 'react'
import { connect } from 'react-redux';
import Order from './Order/Order';
import * as ordersActions from '../../store/actions/ordersActions';
import Infobox from '../Infobox/Infobox';
import './Orders.css';

class Orders extends Component {

    componentDidMount = () => {
        this.props.getOrders();
    }

    render() {

        let orders = null;
        const productsState = this.props.productsState;
        const ordersState = this.props.ordersState;

        if (ordersState.loading || productsState.loading) {

            orders = <Infobox information={"Daten werden geladen..."} />;

        } else if (ordersState.message || productsState.message) {

            orders = <Infobox information={ordersState.message} />;

        } else {

            orders = ordersState.orders.map((order, index) => {

                let articles = order.articles.map((article) => {
                    let product = productsState.products.find((product) =>
                        product._id === article.articleId

                    );
                    return {
                        ...article, name: product.name, href: product.href
                    }
                });

                return (
                    <Order
                        key={index} // Nicht benötigt -> Erzeugt error bei weglassen
                        id={order.orderNr}
                        date={order.orderDate}
                        items={articles}
                    />
                );
            });

            if (orders.length === 0) {
                orders = <Infobox information={"Es wurde noch nichts bestellt."} />;
            }
        }


        return (
            <div className="order-center container">
                {orders}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ordersState: state.orders,
        productsState: state.products
    }
}

const mapActionToProps = (dispatch) => {
    return {
        getOrders: () => { dispatch(ordersActions.getOrders()) },
    }
}

export default connect(mapStateToProps, mapActionToProps)(Orders);
