import { baseUrl } from '../helpers/constants';
import cormoran from 'cormoran';

cormoran
  .query('&callback')
  .naming('movieJSONPCallback');

/*
 * Given a movie id returns a pending Promise
 * with the result from the OMDB API
 */
function movie(id) {
  const url = `${ baseUrl }&i=${ id }`;

  return cormoran.get(url);
}

export default movie;
