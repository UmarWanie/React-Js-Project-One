import React from "react";
import "./footer.css";

class Footer extends React.Component {
	render() {
		return (
			<footer class="footer bg-dark">
				<div class="container-fluid pt-3">
					<nav>
						<p class="copyright text-center">
							©<script>document.write(new Date().getFullYear())</script>
							Designed & Developed by <strong>UmarWani & Aamir Sofi</strong>
						</p>
					</nav>
				</div>
			</footer>
		);
	}
}
export default Footer;
