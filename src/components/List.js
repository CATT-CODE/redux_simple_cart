import React from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../productDatabase";
import { ADD_TO_CART } from "../redux-state/actions";

const ProductList = () => {
	const dispatch = useDispatch();
	const products = fetchProducts();

	return (
		<div>
			{products.map((item) => {
				return (
					<div>
						<button
							onClick={() =>
								dispatch({
									type: ADD_TO_CART,
									payload: {
										newProduct: item,
									},
								})
							}
						>
							Add {item.name} to cart
						</button>
					</div>
				);
			})}
		</div>
	);
};

export default ProductList;
