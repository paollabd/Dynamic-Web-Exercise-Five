import React from "react";

import CreateAccountForm from "../../components/CreateAccountForm";

export default function Signup({submitFunction}) {
	return (
		<div>
			<h1>Create Account</h1>
			<CreateAccountForm submitFunction={signupFunction} />
			<div className='signup'>
				<div className='logContainer'>
					<form action='/submit' method='GET'>
						<h1>Hello, Friend!</h1>
						<br/>
						<h3>Already have an account? Log in here!</h3>
						<br/>
						<input type='submit' value='Login' className="logBtn" />
					</form>
				</div>
				<div className="signupContainer">
					<CreateAccountForm signupFunction={signupFunction} />
				</div>
			</div>
		</div>
	);
}