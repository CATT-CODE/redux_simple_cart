import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
	const cart = useSelector((state) => state.cart);

	console.log("shoppingCart: ", cart);

	return (
		<div
			style={{
				marginTop: "20px",
				marginBottom: "20px",
				padding: "30px",
				border: "2px solid blue",
				width: "100%",
			}}
		>
			{cart.products.map((item) => {
				return (
					<div>
						{item.name} - ${item.price}
					</div>
				);
			})}
		</div>
	);
};

export default Cart;
