import React from "react";
import { FooterContainer } from "../styles/Footer.styles";
import { AiOutlineArrowUp } from "react-icons/ai";
import BackgroundImg from "../images/backgroundImg.png";
import { GridContainer } from "../styles/Footer.styles";
import { AiFillLinkedin, AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
// AiOutlineArrowUp;
const Footer = () => {
	// scroll to top
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<footer style={{ background: "#000807", position: "relative" }}>
			<FooterContainer>
				<div>
					<img src={BackgroundImg} alt="img" />

					<a
						href="/"
						style={{ display: "block", color: "#fff" }}
						onClick={scrollToTop}
					>
						<h1>
							<AiOutlineArrowUp />
						</h1>
					</a>
				</div>
				<hr />

				<GridContainer>
					<div>
						<h1>DONT MISS OUT</h1>
						<p>Sign up for the latest release and coupons</p>
						<form>
							<label htmlFor="emailInpiut">Email Address</label>

							<input type="text" />
						</form>
						<div className="sign-up">
							<h1>SIGN UP</h1>
						</div>
						<p id="sign-up">
							By signing up, you agree to TheoMart terms and conditions and you
							approve to receive emails from us.
						</p>
					</div>
					<div>
						<div className="ul-div">
							<ul>
								<h2>About Us</h2>
								<li>Privacy Notes</li>
								<li>Terms of Use</li>
								<li>Our Company</li>
							</ul>
						</div>
						<div className="ul-div">
							<ul>
								<h2>Contact</h2>

								<li>Customer Service</li>
								<li>News Room Contact</li>
							</ul>
						</div>
						<div className="ul-div">
							<ul>
								<h2>Connect</h2>
								<li>Privacy Notes</li>
								<li>Terms of Use</li>
							</ul>
						</div>
					</div>
				</GridContainer>
			</FooterContainer>
			<div style={{ position: "absolute", left: "1rem", top: "1rem" }}>
				<div>
					<a
						href="/"
						style={{ fontSize: "2rem", color: "#fff", margin: "1rem 0" }}
					>
						<AiFillLinkedin
							style={{ fontSize: "2rem", color: "#fff", margin: "1rem 0" }}
						/>
					</a>
				</div>
				<div>
					<a
						href="/"
						style={{ fontSize: "2rem", color: "#fff", margin: "1rem 0" }}
					>
						<AiFillGithub
							style={{ fontSize: "2rem", color: "#fff", margin: "1rem 0" }}
						/>
					</a>
				</div>
				<div>
					<a
						href="/"
						style={{ fontSize: "2rem", color: "#fff", margin: "1rem 0" }}
					>
						<AiOutlineTwitter
							style={{ fontSize: "2rem", color: "#fff", margin: "1rem 0" }}
						/>
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
