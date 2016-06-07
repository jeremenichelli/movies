import search from './services/search';
import movie from './services/movie';

let test1, test2, test3;

// test search without page number
search('Batman')
  .then(data => {
    test1 = data;
  });

// test search with page number
search('Spider-man', 2)
  .then(data => {
    test2 = data;
  });

// test movie service
movie('tt0468569')
  .then(data => {
    test3 = data;
  });
