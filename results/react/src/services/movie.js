import { BASE_URL, API_KEY } from '../helpers/constants';
import cormoran from 'cormoran';

cormoran
  .query('&callback')
  .naming('movieJSONPCallback');

/*
 * Given a movie id returns a pending Promise
 * with the result from the MOVIE DB API
 */
function movie(id) {
  return cormoran.get(`${BASE_URL}movie/${ id }?api_key=${API_KEY}`);
}

export default movie;
