import React from 'react';
import CollectionItem from '../../components/collection-item/collection-item.component';

import './preview-collection.styles.scss';

const CollectionPreview = ({ title, items }) => (
	<div className="collection-preview">
		<h2 className="title">{title.toUpperCase()}</h2>
		<div className="preview">
			{items
				.filter((item, idx) => idx < 4)
				.map(({ id, ...otherItemProps }) => (
					<CollectionItem key={id} {...otherItemProps} />
				))}
		</div>
	</div>
);

export default CollectionPreview;
