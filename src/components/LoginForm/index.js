import React from "react";

export default function LoginForm({loginFunction}) {
	return (
		<div className='login'>
			<form onSubmit={e => loginFunction(e)}>
				<div className='loginForm'>
					<h2>Log In</h2>
					<label htmlFor='loginEmail'>Email</label><br/>
					<input type="email" name="loginEmail" placeholder="email" />
					<br/>
					<br/>
					<label htmlFor='loginPasswprd'>Password</label><br/>
					<input type="password" name="loginPassword" placeholder="password" />
					<br/>
					<br/>
					<button className="loginBtn">Log In</button>
				</div>
			</form>	
		</div>
	);
}