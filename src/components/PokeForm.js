import React from 'react'

class PokeForm extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			value: '',
		}
	}

	render() {
		return (
			<form onSubmit={this.props.onSubmit}>
				<input type="text" onChange={this.props.onChange} />
				<button type="submit">Submit</button>
			</form>
		)
	}
}

export default PokeForm
