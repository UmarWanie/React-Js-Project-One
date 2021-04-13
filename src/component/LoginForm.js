import React from "react";
import wave from "../wave.png";
import bg from "../bg.svg";
import avatar from "../avatar.svg";
import "./login.css";

function LoginForm() {
	return (
		<div>
			<img className="wave" src={wave} alt=".." />
			<div className="login_container">
				<div className="img">
					<img src={bg} alt="..." />
				</div>
				<div className="login-content">
					<form method="POST" action="">
						<img src={avatar} alt=".." />
						<h2 className="title">Welcome</h2>
						<div className="input-div one">
							<div className="i">
								<i className="fas fa-user"></i>
							</div>
							<div className="div">
								<h5>Username</h5>
								<input
									type="text"
									name="username"
									className="input"
									maxLength="150"
									required
									id="id_username"
								/>
							</div>
						</div>
						<div className="input-div pass">
							<div className="i">
								<i className="fas fa-lock"></i>
							</div>
							<div className="div">
								<h5>Password</h5>
								<input
									type="password"
									name="password"
									className="input"
									required
									id="id_password"
								/>
							</div>
						</div>
						<a href="#aa">Create Account</a>
						<input type="submit" className="btn" value="Login" />
					</form>
				</div>
			</div>
		</div>
	);
}
export default LoginForm;
