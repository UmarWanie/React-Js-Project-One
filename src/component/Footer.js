import React from "react";
import "./footer.css";

class Footer extends React.Component {
	render() {
		return (
			<footer class="footer">
				<div class="container-fluid">
					<nav>
						<p class="copyright text-center">
							©<script>document.write(new Date().getFullYear())</script>
							Designed and Developed by <strong>UmarWani & Aamir Sofi</strong>
						</p>
					</nav>
				</div>
			</footer>
		);
	}
}
export default Footer;
