import { baseUrl } from '../helpers/constants';
import cormoran from 'cormoran';

cormoran
  .query('&callback')
  .naming('searchJSONPCallback');

/*
 * Given a movie title returns a pending Promise
 * with the results from the OMDB API
 */
function search(title, page) {
  const url = `${ baseUrl }&s=${ encodeURI(title) }&page=${ page || 1 }`;

  return cormoran.get(url);
}

export default search;
