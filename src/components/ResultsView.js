import React from "react";

import LikesList from '../containers/LikesList';

export default function ResultsView() {

	return (
		<div>
			<LikesList 
				header={'The GIFs you liked'}
				justify={'center'}
				colSpan={2}
			/>
		</div>
	);
}
