import React from "react";
import LoginForm from "./LoginForm";
import "./maincontent.css";

class MainContent extends React.Component {
	render() {
		return (
			<div className="main_content">
				<LoginForm />
			</div>
		);
	}
}
export default MainContent;
