import React from 'react'

function PokeForm(props) {
	return (
		<form onSubmit={props.onSubmit}>
			<input type="text" onChange={props.onChange} />
			<button type="submit">Submit</button>
		</form>
	)
}

export default PokeForm
