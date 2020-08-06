import React from 'react'

const styles = {
	width: '15rem',
	height: '15rem',
}

function PokeImage(props) {
	return <img src={props.imageURL} alt={props.key} style={styles} />
}

export default PokeImage
