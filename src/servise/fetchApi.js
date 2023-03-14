import axios from 'axios';

const API_KEY = '33040726-8ad8a9d3351d63d14c4afe724';
const BASE_URL = 'https://pixabay.com/api/';

export const fetchData = (query, page, perPage) => {
  return axios
    .get(
      `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then(response => response.data);
};
