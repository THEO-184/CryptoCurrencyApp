import styled from "styled-components";
export const ProductsContainer = styled.div`
	width: 95vw;
	margin: 0 auto;
	text-align: center;

	.overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 81%;
		background: transparent;
		transition: all 0.5s;
		opacity: 0;
		z-index: 2;
	}

	.overlay.dark {
		opacity: 1;
		background: rgba(0, 0, 0, 0.4);
		z-index: 50;
	}
`;

export const Title = styled.h1`
	font-size: 2.5rem;
	letter-spacing: 2px;
	max-width: 70vw;
	margin: 1.5rem auto;
	text-align: center;

	@media (max-width: 768px) {
		font-size: 1.3rem;
	}
`;

export const GridContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	gap: 1.2rem;
`;

export const Product = styled.div`
	position: relative;

	.overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 81%;
		background: transparent;
		transition: all 0.5s;
		opacity: 0;
		z-index: 2;
	}

	.button {
		position: absolute;
		bottom: 20%;
		right: 0;
		background: #145c9e;
		padding: 8px 15px;
		border: none;
		color: #fff;
		z-index: 3;
		/* opacity: 1; */
		transition: 0.3s;
		:hover {
			cursor: pointer;
			background: #dd7752;
		}
	}

	.overlay.dark {
		opacity: 1;
		background: rgba(0, 0, 0, 0.4);
		z-index: 50;
	}

	:hover {
		cursor: pointer;
	}
	img {
		width: 100%;
		height: 300px;
		object-fit: cover;
		display: block;
	}

	h4 {
		font-size: 1.2rem;
	}
	h5,
	h4 {
		margin: 10px 0;
	}
	h5 {
		font-size: 1rem;
	}
`;
