import React from 'react'

const styles = {
	width: '15rem',
	height: '15rem',
}

function PokeImage(props) {
	return (
		<div>
			<img src={props.imageURL} style={styles} />
		</div>
	)
}

export default PokeImage
