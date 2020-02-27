import React from 'react';

import './menu-item.styles.scss';

const MenuItem = props => (
	<div className={`${props.size} menu-item`}>
		<div
			className="background-image"
			style={{
				backgroundImage: `url(${props.imageUrl})`,
			}}
		></div>
		<div className="content">
			<h2>{props.title.toUpperCase()}</h2>
			<span>SHOP NOW</span>
		</div>
	</div>
);

export default MenuItem;
