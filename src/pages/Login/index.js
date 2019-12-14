import React from "react";
import LoginForm from "../../components/LoginForm";

export default function Login({ loginFunction }) {
	return (
	<div className='login'>
			<div className='formContainer'>
				<LoginForm loginFunction={loginFunction} />
			</div>
			<div className='joinContainer'>
				<form action='/signup' method='GET'>
					<h1>Hello, Friend!</h1>
					<h3>Don't have an account yet? Join us here!</h3>
					<br/>
					<input type='submit' value='Sign Up' className="joinBtn" />
				</form>
			</div>
		</div>
	);	
}
