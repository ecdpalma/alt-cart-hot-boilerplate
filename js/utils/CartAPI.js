import AltCartActions from '../actions/AltCartActions';

export default {

    getProductData() {
        var data = JSON.parse(localStorage.getItem('product'));
        AltCartActions.receiveProduct(data);
    }
}
