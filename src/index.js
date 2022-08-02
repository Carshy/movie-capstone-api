import './style.css';
import { fetchList, showList } from './modules/showlist.js';

fetchList();
const fetchMovies = fetchList();
showList(fetchMovies);
