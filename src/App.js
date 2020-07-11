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
		const copy = { ...this.state }
		copy.value = event.target.value
		this.setState(copy)
	}

	handleSubmit(event) {
		const copy = { ...this.state }
		copy.loading = true
		this.setState(copy)
		event.preventDefault()
		fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.value}`)
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
			if (
				value !== null &&
				(key === 'back_default' || key === 'front_default')
			) {
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
				{this.state.loading ? 'loading...' : imageComponents}
			</div>
		)
	}
}

export default App
