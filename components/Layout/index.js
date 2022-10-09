import React from 'react';

export default function LayoutComponent({ children }) {
	return (
		<div className="main">
			<div className="header">Header</div>
			<main>{children}</main>
			<div className="footer">Footer</div>
		</div>
	);
}
