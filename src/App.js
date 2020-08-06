import React from 'react'
import PokeImage from './components/PokeImage'
import PokeForm from './components/PokeForm'

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			images: {},
			value: '',
			loading: false,
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleChange(event) {
		this.setState({
			value: event.target.value,
		})
	}

	handleSubmit(event) {
		this.setState({
			loading: true,
		})
		event.preventDefault()
		fetch(
			`https://pokeapi.co/api/v2/pokemon/${this.state.value.toLowerCase()}`
		)
			.then(response => response.json())
			.then(data =>
				this.setState({
					images: data.sprites,
					loading: false,
				})
			)
	}

	render() {
		let imageComponents = []
		for (const [key, value] of Object.entries(this.state.images)) {
			if (key === 'front_default') {
				imageComponents.push(<PokeImage key={key} imageURL={value} />)
			}
		}

		imageComponents.reverse()

		return (
			<div>
				<PokeForm
					onChange={this.handleChange}
					onSubmit={this.handleSubmit}
				/>
				{this.state.loading ? (
					<img src="loading.gif" alt="loading..." />
				) : (
					imageComponents
				)}
			</div>
		)
	}
}

export default App
