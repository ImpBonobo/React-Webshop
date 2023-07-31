import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as productActions from '../../store/actions/productsActions';
import * as cartActions from '../../store/actions/cartActions';
import Product from './Product/Product';
import Infobox from '../Infobox/Infobox';
import './Products.css';

class Products extends Component {

    categoryHandler = (categoryId, categoryName) => {
        this.props.filterCategory(categoryId, categoryName);
    }

    subcategoryHandler = (categoryId, subcategoryId, categoryName, subcategoryName) => {
        let combinedCategories = categoryName + '/' + subcategoryName;
        this.props.filterSubcategory(categoryId, subcategoryId, combinedCategories);
    }

    render() {

        let products = null;
        let categories = null;
        const productsState = this.props.productsState;
        const categoryState = this.props.categoryState.category;
        const subcategoryState = this.props.categoryState.subcategory;

        if (productsState.loading || categoryState.loading || subcategoryState.loading) {

            products = <Infobox information={"Daten werden geladen..."} />;

        } else if (productsState.message || categoryState.message) {

            products = <Infobox information={productsState.message} />;
        } else {

            products = productsState.displayedProducts.map((product, index) => {

                return (
                    <Product
                        key={index} // Nicht benötigt -> Erzeugt error bei weglassen
                        _id={product._id}
                        name={product.name}
                        href={product.href}
                        price={product.price}
                        addToCart={this.props.addToCart}
                    />
                )
            });

            categories = categoryState.categories.map((category, indexCategory) => {

                let subcategories = null;

                subcategories = category.subcategoryIds.map((id, indexSubcategory) => {

                    let matchingSubcategory = subcategoryState.subcategories.find((subcategory) =>
                        subcategory._id === id
                    );

                    return (
                        <button
                            key={indexSubcategory}
                            className="subcategory"
                            kex={matchingSubcategory._id}
                            onClick={() => {
                                this.subcategoryHandler(
                                    category._id,
                                    matchingSubcategory._id,
                                    category.name,
                                    matchingSubcategory.name
                                )
                            }}
                        >
                            {matchingSubcategory.name}
                        </button>
                    )
                })
                return (
                    <>
                        <button
                            kex={indexCategory}
                            className="category"
                            onClick={() => { this.categoryHandler(category._id, category.name) }}
                        >
                            {category.name}
                        </button>
                        {subcategories}
                    </>
                )
            });
        }

        return (
            <div className="products">
                <div className="product-filter container">
                    <div className="headline">
                        <h3>Ausgewählt:</h3>
                        <h1> {productsState.displayedCategory}</h1>
                    </div>
                    <div className="product-filter">
                        <div className="dropdown">
                            <div className="dropdown-button">
                                <div className="text-left">Kategorie auswählen</div>
                                <div className="text-right">
                                    <i className="fas fa-chevron-down"></i>
                                </div>
                            </div>
                            <div className="dropdown-content">
                                <button
                                    className="category"
                                    onClick={() => { this.categoryHandler(null, 'Alle Produkte') }}
                                >
                                    Alle Produkte
                                </button>
                                {categories}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="product-center container">
                    {products}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        productsState: state.products,
        categoryState: state.category
    }
}

const mapActionToProps = (dispatch) => {
    return {
        getProducts: () => { dispatch(productActions.getProducts()) },
        addToCart: (data) => { dispatch(cartActions.addToCart(data)) },
        filterCategory: (categoryId, categoryName) => { dispatch(productActions.filterCategory(categoryId, categoryName)) },
        filterSubcategory: (categoryId, subcategoryId, categoryName) => { dispatch(productActions.filterSubcategory(categoryId, subcategoryId, categoryName)) }
    }
}

export default connect(mapStateToProps, mapActionToProps)(Products);
