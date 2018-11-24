import React, { Component } from 'react';

export default class SearchForm extends Component {
	constructor(props){
		super(props);
		this.state = {
		searchText: ''
	}
}

	onSearchChange (e) {
		this.setState({ searchText: e.target.value });
	};

	handleSubmit (e){
		e.preventDefault();
		this.props.onSearch(this.query.value);
		e.currentTarget.reset();
	};

	render() {
		return (
			<form className="search-form" onSubmit={this.handleSubmit.bind(this)}>
				<label className="is-hidden" htmlFor="search">Search</label>
				<input
					type="search"
					onChange={this.onSearchChange.bind(this)}
					ref={input => (this.query = input)}
					name="search"
					placeholder="Search..."
				/>
				<button type="submit" id="submit" className="search-button">
					<i className="material-icons icn-search">search</i>
				</button>
			</form>
		);
	}
}
