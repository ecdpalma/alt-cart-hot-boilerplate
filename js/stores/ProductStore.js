import alt from '../alt';
import AltCartActions from '../actions/AltCartActions'

class ProductStore {

    constructor(data) {
        this.product = {};
        this.selected = {};

        this.bindActions(AltCartActions);
    }

    static getProduct() {
        return this.getState().product;
    }

    static getSelected() {
        return this.getState().selected;
    }

    setSelected(index) {
        this.selected = this.product.variants[index];
    }

    onReceiveProduct(data) {
        this.product = data[0];
        this.selected = data[0].variants[0];
    }

    onSelectProduct(index) {
        this.setSelected(index);
    }
}

export default alt.createStore(ProductStore, 'ProductStore')
