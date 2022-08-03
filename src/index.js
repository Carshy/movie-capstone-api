import './style.css';
import fetchList from './modules/showlist.js';

// Loading API images in the DOM
const showSeriesList = async () => {
  const seriesEntries = await fetchList();
  const displaySeries = document.querySelector('.watchlist');

  seriesEntries.forEach((entry) => displaySeries.insertAdjacentHTML('beforeend', `
    <div id='series-list'>
    <img class="show-image" src="${entry.image.medium}" alt="${entry.name}">
    <p class="show-name">${entry.name}  <i class="fa fa-heart"></i></P>
    <button type="submit" class="comment">Comment</button> 
    </div> 
  `));
};

document.addEventListener('DOMContentLoaded', showSeriesList);