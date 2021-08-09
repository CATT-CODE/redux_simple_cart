import { ADD_TO_CART } from './actions';

export const reducer = (state, action) => {
	if (action.type === ADD_TO_CART) {
		const newProduct = action.payload.newProduct;

		return {
			...state,
			cart: {
				...state.cart,
				products: [
					...state.cart.products,
					newProduct
				]
}
		}
	}
	return state;
}