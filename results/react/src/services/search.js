import { BASE_URL, API_KEY } from '../helpers/constants';
import cormoran from 'cormoran';

cormoran
  .query('&callback')
  .naming('movieJSONPCallback');

/*
 * Given a title returns a pending Promise
 * with the search results from the MOVIE DB API
 */
function search(title, page) {
  return cormoran.get(`${BASE_URL}search/movie?api_key=${API_KEY}&query=${title}&page=${page}`);
}

export default search;
