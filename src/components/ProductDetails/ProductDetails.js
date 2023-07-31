import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as productDetailsActions from '../../store/actions/productDetailsActions';
import * as cartActions from '../../store/actions/cartActions';
import Infobox from '../Infobox/Infobox';
import './ProductDetails.css';

class ProductDetails extends Component {

    componentDidMount() {
        const { match: { params } } = this.props;
        this.props.getProductDetails(params.id);
    }

    componentWillUnmount() {
        this.props.removeProductDetails();
    }

    addToCartHandler = () => {
        let cartData = {
            _id: this.props.productDetailsState.product._id,
            name: this.props.productDetailsState.product.name,
            href: this.props.productDetailsState.product.href,
            price: this.props.productDetailsState.product.price
        }

        this.props.addToCart(cartData);
    }

    render() {

        const productDetailsState = this.props.productDetailsState;
        const categoryState = this.props.categoryState.category;

        if (productDetailsState.loading || categoryState.loading) {

            return (
                <div className="container product-detail-info">
                    <Infobox information={"Daten werden geladen..."} />
                </div>
            )

        } else if (productDetailsState.message || categoryState.message) {

            return (
                <div className="container product-detail-info">
                    <Infobox information={productDetailsState.message} />
                </div>
            )
        } else {

            let category = categoryState.categories.find((category) =>
                        category._id === productDetailsState.product.categoryId
            );

            return (
                <div className="product-detail details container">
                    <div className="image">
                        <img src={productDetailsState.product.href} alt={productDetailsState.product.name} />
                    </div>
                    <div className="information">
                        <div className="title">
                            <h1>{productDetailsState.product.name}</h1>
                            <h3>{category.name}</h3>
                        </div>
                        <div className="attribute">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Preis</td>
                                        <td className="price">{productDetailsState.product.price} <span>€</span></td>
                                    </tr>
                                    <tr>
                                        <td>Auflager</td>
                                        <td>{productDetailsState.product.quantity} <span>Stück</span></td>
                                    </tr>
                                    <tr>
                                        <td>Bewertung</td>
                                        <td>
                                            <i className="far fa-heart"></i>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan="1">
                                            <button className="main-button" onClick={this.addToCartHandler}>Hinzufügen</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="detail">
                        <h2>Produkt Details</h2>
                        <p>{productDetailsState.product.description}</p>
                    </div>
                </div>
            )

        }
    }
}

const mapStateToProps = (state) => {
    return {
        productDetailsState: state.productDetails,
        categoryState: state.category
    }
}

const mapActionToProps = (dispatch) => {
    return {
        getProductDetails: (id) => { dispatch(productDetailsActions.getProductDetails(id)) },
        removeProductDetails: () => { dispatch(productDetailsActions.removeProductDetails()) },
        addToCart: (data) => { dispatch(cartActions.addToCart(data)) }
    }
}

export default connect(mapStateToProps, mapActionToProps)(ProductDetails);
