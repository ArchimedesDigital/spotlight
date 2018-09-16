import React from 'react';
import HomeCover from './sections/HomeCover';

import './SpotlightHome.css';

const SpotlightHome = (props) => {

	return (
		<div id="home">
			<HomeCover {...props} />
		</div>
	);
}

export default SpotlightHome;
