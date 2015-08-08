import '../css/app.css';
import React from 'react';
import ProductData from './ProductData';
import CartAPI from './utils/CartAPI';
import AltCartApp from './components/AltCartApp';

main();

function main() {

    ProductData.init();

    CartAPI.getProductData();

    var app = document.createElement('div');
    document.body.appendChild(app);

    React.render(<AltCartApp />, app);
}
