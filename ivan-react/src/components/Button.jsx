import React from "react";

const Button = ({ children, onClick }) => {
	const style = {
		textDecoration: 'none',
		display: 'inline-block',
		color: 'white',
		padding: '20px 30px',
		margin: '10px 20px',
		borderRadius: '10px',
		textTransform: 'uppercase',
		letterSpacing: '2px',
		backgroundImage:
			'linear-gradient(to right, #9EEFE1 0%, #4830F0 51%, #9EEFE1 100%)',
		backgroundSize: '200% auto',
		boxShadow: '0 0 20px rgba(0, 0, 0, .1)',
		transition: '.5s',
	};

	return <button style={style} onClick={onClick}>{children}</button>;
}

export default Button;