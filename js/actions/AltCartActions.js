import alt from '../alt'

class AltCartActions {

    receiveProduct(data) {
        this.dispatch(data);
    }

    selectProduct(index) {
        this.dispatch(index);
    }

    addToCart(sku, update) {
        this.dispatch( { sku, update });
    }

    removeFromCart(sku) {
        this.dispatch(sku);
    }

    updateCartVisible(cartVisible) {
        this.dispatch(cartVisible);
    }
}

export default alt.createActions(AltCartActions);
