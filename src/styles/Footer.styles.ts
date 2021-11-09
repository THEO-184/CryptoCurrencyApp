import styled from "styled-components";

export const FooterContainer = styled.div`
	font-family: "Roboto", sans-serif;
	max-width: 75vw;
	margin: 0 auto;
	padding: 1rem 20px;
	background: #000807;
	color: #fff;
	& > div:first-child {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	img {
		filter: invert(100%);
	}

	hr {
		background: #fff;
		height: 2px;
		border: none;
		margin: 1rem 0;
	}
`;

export const GridContainer = styled.div`
	font-family: "Roboto", sans-serif;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	margin: 2rem 0;

	& > div:first-child h1 {
		font-size: 2rem;
		margin-bottom: 10px;
	}
	& > div:last-child {
		display: flex;
		align-items: flex-start;
		justify-content: space-around;
		flex-flow: row nowrap;
	}

	& > div:first-child {
		margin-bottom: 2rem;
	}

	& > div:last-child .ul-div {
		margin: 0 10px;
	}
	ul li {
		list-style-type: none;
		margin: 1rem 0;
		font-size: 1rem;
		color: #777;
	}

	#sign-up {
		color: #777;
		font-size: 1rem;
		letter-spacing: 1px;
	}

	ul h2 {
		color: #fff;
		font-size: 1.2rem;
		letter-spacing: 2px;
	}

	form {
		width: 100%;
		height: 50px;
		margin: 2rem 0;

		input {
			width: 100%;
			height: 100%;
			padding: 10px 15px;
		}
	}

	.sign-up {
		text-align: center;
		padding: 10px;
		border: 1px solid #fff;
		margin: 2rem 0;
	}

	/* media query */
	@media (max-width: 768px) {
		ul li {
			font-size: 1rem;
		}

		ul h2 {
			color: #fff;
			font-size: 1rem;
		}

		& > div:first-child h1 {
			font-size: 1.1rem;
		}
	}

	@media (max-width: 500px) {
		ul li {
			font-size: 0.8rem;
		}

		ul h2 {
			color: #fff;
			font-size: 0.8rem;
		}

		& > div:first-child h1 {
			font-size: 1rem;
		}
	}
`;
