import React from "react";
import NavBar from "./NavBar";

import "./header.css";

class Header extends React.Component {
	render() {
		return (
			<div>
				<NavBar />
				<span>Just Testing</span>
			</div>
		);
	}
}
export default Header;
