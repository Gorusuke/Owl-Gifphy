import React from 'react'

const Gif = ({match}) => {

	return (
		<div>
			{match.params.id}
		</div>
	)
}

export default Gif
