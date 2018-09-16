import React from 'react';
import Header from '../../../components/navigation/Header';
import Footer from '../../../components/navigation/Footer';

import './DcpLayout.css';

const DcpLayout = props => (
	<div className="hl__dcpLayout">
		<Header />
		{props.children}
		<Footer />
	</div>
);

export default DcpLayout;
