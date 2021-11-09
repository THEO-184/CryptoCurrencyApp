import styled from "styled-components";

export const SideNav = styled.div.attrs((props) => ({
	className: props.className,
}))`
	position: fixed;
	background: #f9ffd6;
	top: 0;
	right: -100%;
	z-index: 1000;
	bottom: 0;
	width: 430px;
	min-height: 100vh;
	transition: right 0.7s ease;
	overflow-y: auto;

	&.active {
		right: 0;
	}

	.closeBtn {
		width: 40px;
		height: 40px;
		margin: 1rem;
		background: #fff;
		padding: 5px;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	> h1 {
		margin-bottom: 1rem;
		text-align: center;
	}

	.clear-cart-container {
		text-align: center;
		margin: 1rem 0;
	}

	.clear-cart {
		padding: 8px 1.2rem;
		color: #fff;
		letter-spacing: 1px;
		font-size: 1.2rem;
		border: none;
		background-color: #133c55;
		cursor: pointer;

		:hover {
			background-color: #122c44;
		}
	}

	.clear-cart-container h1,
	.clear-cart-container button {
		margin: 1rem 0;
	}

	@media (max-width: 600px) {
		width: 100vw;
	}
`;

// cart
export const Cart = styled.div`
	width: 90%;
	margin: 1rem auto;
	display: flex;
	align-items: center;
	justify-content: space-between;

	.about-cart {
		flex: 1;
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
	}

	.img-container {
		flex: 1;
	}

	img {
		width: 70%;
		height: 110px;
		object-fit: cover;
	}

	.item-name {
		flex-basis: 40%;
		/* display: flex; */
		padding: 5px 0;
		/* justify-content: center;
		align-items: center;
		flex-flow: column nowrap; */
	}

	.item-name h4,
	.item-name h5 {
		margin-bottom: 12px;
	}

	.item-name h4 {
		font-size: 1.1rem;
	}
	.item-name h5 {
		color: #dd7752;
		font-size: 1.1rem;
	}

	.total-items {
		flex-basis: 30%;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		flex-flow: column nowrap;
	}

	button {
		background: transparent;
		border: none;
		cursor: pointer;
	}
`;
