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
    <div class='image-header'>
    <img src= ${result.image.medium}>
    </div>
    <span class="close-button close">&times;</span>
    </div>
    <div class='series-details'>
    <h4>${result.name}</h4>
    <p>${result.summary}</p>
    </div>
    <div class='series-attributes'>
    <p>Genre: (${result.genres})</p>
    <p>Premiered on: ${result.premiered}</p>
    <p>Ratings(${result.rating.average})</p>
    </div>
    <div class='comment-section'>
    <input type='text' class='user-name' placeholder='Your name'>
    <textarea type='text' class='user-comment' placeholder='Your insights'></textarea>
    <button class='comment-box' type='submit'>Comment</button>
    </div>
    `;
    body.append(popupList);
    // Close button
    const close = document.querySelector('.close');
    close.addEventListener('click', () => {
      displaySeries.style.filter = 'blur(0)';

      const body = document.querySelector('body');
      body.removeChild(body.lastChild);
    });
  };
  // Comment eventlisters
  const commentBtns = document.querySelectorAll('.comments');
  commentBtns.forEach((button) => {
    button.addEventListener('click', (e) => {
      getPopup(e.target.parentNode.id);
      displaySeries.style.filter = 'blur(12px)';
    });
  });
};
document.addEventListener('DOMContentLoaded', showSeriesList);
