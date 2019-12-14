import React from 'react';

export default function Header({ loggedIn, logoutFunction }) {
	return(
		<header className='Header'>
			<nav>
				{loggedIn && <a href='/'>Home</a>}
				{!loggedIn && <a href='/login'>Log in</a>}
				{!loggedIn && <a href='/signup'>Signup</a>}
				{loggedIn && <a onClick={() => logoutFunction()}>Logout</a>}
			</nav>
		</header>
	);
}