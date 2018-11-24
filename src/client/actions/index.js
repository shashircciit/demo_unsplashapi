import axios from 'axios';

export const FETCH_CARS = 'fetch_cars';
export const fetchCars = () => async (dispatch) => {
  const res = axios.get(
    `https://api.unsplash.com/search/photos/?page=1&per_page=10&query=${"car"}&client_id=25491f8129ab97705ecb0a9c934b286aa9a29a207fc192bd41900a59ca033bd7`
  )
  .then(data => {
    console.log(data)
    dispatch({
      type: FETCH_CARS,
      payload: data.data.results
    });
  
  })
  .catch(err => {
    console.log('Error happened during fetching!', err);
  });
};
