import './style.css';
import fetchList from './modules/showlist.js';

// Loading API images in the DOM
const showSeriesList = async () => {
  const seriesEntries = await fetchList();
  const displaySeries = document.querySelector('.watchlist');
  const displayItem = document.createElement('div');
  displayItem.classList.add('card-image1');
  for (let entry = 50; entry < 70; entry += 1) {
    displayItem.innerHTML += `
    <div class="card-image">
    <img class="show-image" src="${seriesEntries[entry].image.medium}" alt="${seriesEntries[entry].name}">
    <p class="title">${seriesEntries[entry].name}  <i class="fa fa-heart"></i></p>
    <button type="submit" class="comments">Comments</button> 
    </div> 
  `;
    displaySeries.append(displayItem);
  }
};
document.addEventListener('DOMContentLoaded', showSeriesList);
