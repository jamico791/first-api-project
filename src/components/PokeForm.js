import React from 'react'

function PokeForm(props) {
	return (
		<form onSubmit={props.onSubmit}>
			<label style={{ display: 'block' }}>
				Enter Pokemon name or Pokedex number:{' '}
			</label>
			<input type="text" onChange={props.onChange} />
			<button type="submit">Submit</button>
		</form>
	)
}

export default PokeForm
