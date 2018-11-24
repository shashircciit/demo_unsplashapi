import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import GalleryList from '../Components/GalleryList';
import SearchForm from '../Components/SearchForm';
import {fetchCars} from '../actions';


 class HomePage extends Component {
	constructor() {
		super();
		this.state = {
			imgs: [],
			loadingState: true
		};
	}

	componentDidMount() {
    // this.fetchCars();
		this.imageSearch();
	}

	imageSearch (query = 'sun'){
		axios
			.get(
				`https://api.unsplash.com/search/photos/?page=1&per_page=10&query=${query}&client_id=25491f8129ab97705ecb0a9c934b286aa9a29a207fc192bd41900a59ca033bd7`
			)
			.then(data => {
				this.setState({ imgs: data.data.results, loadingState: false });
			})
			.catch(err => {
				console.log('Error happened during fetching!', err);
			});
	};

	render() {
		return (
			<div>
				<div className="main-header">
					<div className="inner">
						<h1 className="main-title">Search The IMage</h1>
						<SearchForm onSearch={this.imageSearch.bind(this)} />
					</div>
				</div>
				<div className="main-content">
					{this.state.loadingState
						? <p>Loading</p>
						: <GalleryList data={this.state.imgs} />}
				</div>
			</div>
		);
	}
}



// function mapStateToProps(state) {
//   return { cars:state.cars};
// }
// function loadData(store) {
//   return store.dispatch(fetchCars());
// }
// export default {
//   loadData,
//   component: connect(mapStateToProps, { fetchCars })(HomePage)
// };



export default {
  component: HomePage
};