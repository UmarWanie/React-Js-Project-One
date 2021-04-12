import React from "react";

class Footer extends React.Component {
	render() {
		return (
			<footer class="footer">
				<div class="container-fluid">
					<nav>
						<p class="copyright text-center">
							©<script>document.write(new Date().getFullYear())</script>
							Designed and Developed by <strong>UmarWani and Amir Sofi</strong>
						</p>
					</nav>
				</div>
			</footer>
		);
	}
}
export default Footer;
