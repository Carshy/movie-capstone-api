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
    <div class="card-image" id = ${seriesEntries[entry].id}>
    <img class="show-image" src="${seriesEntries[entry].image.medium}" alt="${seriesEntries[entry].name}">
    <p class="title">${seriesEntries[entry].name}  <i class="fa fa-heart"></i></p>
    <button type="submit" class="comments" id='comment-btn'>Comments</button> 
    </div> 
  `;
    displaySeries.append(displayItem);
  }
  // displaying the popup window
  const getPopup = async (id) => {
    const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
    const result = await response.json();
    const popupList = document.createElement('div');
    popupList.classList.add('comment-popup');
    const body = document.querySelector('body');
    popupList.innerHTML = `
    <div class='popup-headers'>
    <img src= ${result.image.medium}>
    <button id='close-button'>&times;</button>
    </div>
    <h4>${result.name}</h4>
    <p>${result.summary}</p>
    <div class='series-attributes'>
    <p>${result.genres}</p>
    <p>${result.premiered}</p>
    <p>${result.rating.average}</p>
    </div>
    `;
    body.append(popupList);
  };
  const commentBtns = document.querySelectorAll('.comments');
  commentBtns.forEach((button) => {
    button.addEventListener('click', (e) => {
      getPopup(e.target.parentNode.id);
    });
  });
  // close btn
  const closeBtn = document.getElementById('close-button');
  closeBtn.addEventListener('click', () => {
    getPopup.classList.remove('active');
  });
};
document.addEventListener('DOMContentLoaded', showSeriesList);
// comments
