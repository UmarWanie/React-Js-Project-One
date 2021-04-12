import React from "react";
import LoginForm from "./LoginForm";
import Tilelist from "./Tilelist";

class MainContent extends React.Component {
	render() {
		return (
			<div className="container">
				<LoginForm />
				<Tilelist />
			</div>
		);
	}
}
export default MainContent;
